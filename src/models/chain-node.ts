export default interface ChainStep<T>{
    name: string
    handle(data:T,next:()=>void)
}