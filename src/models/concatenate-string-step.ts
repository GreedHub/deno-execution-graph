import ChainStep from "./chain-node.ts";

type StringData = {
    value: string
}

class ConcatenateString implements ChainStep<StringData>{
    name = 'AddOne';
    value :string

    constructor(value:string){
        this.value = value
    }

    handle(data: StringData, next: () => void) {
      data.value += this.value
    }
  }

export default ConcatenateString