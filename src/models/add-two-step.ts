import ChainStep from "./chain-step.ts";

type NumericData = {
    value: number
}

class AddTwo implements ChainStep<NumericData>{
    name = 'AddTwo';
  
    handle(data: NumericData, next: () => void) {
      data.value+=2
    }
  }

export default AddTwo