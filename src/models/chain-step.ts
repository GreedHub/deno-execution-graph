export default interface ChainStep<T>{
    name: string
    handle(data:T,next:()=>void)
}

export type ExecutionData<T> = {
    timeElapsedMS: number
    functionName: string
    stepNumber: number
    valueAtStep?: T
}