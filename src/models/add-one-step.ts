import ChainStep from "./chain-node.ts";

type NumericData = {
    value: number
}

class AddOne implements ChainStep<NumericData>{
    name = 'AddOne';
  
    handle(data: NumericData, next: () => void) {
      data.value++
    }
  }

export default AddOne