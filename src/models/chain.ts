import ChainStep from "./chain-node.ts";

export type ExecutionTime = {
    timeElapsedMS: number
    functionName: string
}

export default class Chain<T> {
    private steps: ChainStep<T>[]
    readonly execTime: ExecutionTime[]
    readonly initialValue: T
    readonly data:T

    constructor(data:T){
        this.steps = []
        this.execTime = []
        this.initialValue = data
        this.data = data
    }

    execute(): T{
        this.steps.forEach((step:ChainStep<T>)=>{
            const timePrev = performance.now()
            step.handle(this.data,()=>{})
            const timePost = performance.now()
            this.execTime.push({timeElapsedMS: timePost-timePrev,functionName:step.name})
        })

        return this.data
    }

    AddStep(...steps:ChainStep<T>[]){
        steps.forEach(step=>this.steps.push(step))
    }
}