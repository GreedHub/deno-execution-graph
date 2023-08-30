import ChainStep, {ExecutionData} from "./chain-step.ts";



export default class Chain<T> {
    private steps: ChainStep<T>[]
    readonly execData: ExecutionData<T>[]
    readonly initialValue: T
    readonly data:T
    private debug: boolean

    constructor(data:T,debug=false){
        this.steps = []
        this.execData = []
        this.initialValue = this.deepCopy(data)
        this.data = this.deepCopy(data)
        this.debug = debug
    }

    deepCopy(obj:T):T{
        /* Fixme: this is unsafe as it would break with a circular reference object */
        return JSON.parse(JSON.stringify(obj)) as typeof obj;
    }

    execute(): T{
        this.steps.forEach((step:ChainStep<T>,i:number)=>{

            const timePrev = performance.now()
            /* Fixme, change the second parameter to be something like next() function in express in order to enable async functions */
            step.handle(this.data,()=>{})
            const timePost = performance.now()

            const valueAtStep = this.debug ? this.deepCopy(this.data) : undefined

            this.execData.push({timeElapsedMS: timePost-timePrev,functionName:step.name, valueAtStep, stepNumber: i+1})
        })

        return this.data
    }

    AddStep(...steps:ChainStep<T>[]){
        steps.forEach(step=>this.steps.push(step))
    }
}