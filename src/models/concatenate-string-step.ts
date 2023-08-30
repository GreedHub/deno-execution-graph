import ChainStep from "./chain-step.ts";

type StringData = {
    value: string
}

class ConcatenateString implements ChainStep<StringData>{
    name = 'ConcatenateString';
    value :string

    constructor(value:string){
        this.value = value
    }

    handle(data: StringData, next: () => void) {
      data.value += this.value
    }
  }

export default ConcatenateString