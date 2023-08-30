import AddOne from "./models/add-one-step.ts";
import AddTwo from "./models/add-two-step.ts";
import ConcatenateString from "./models/concatenate-string-step.ts";

import Chain from "./models/chain.ts";

/* 
  So, we create a chain with a value of a specific type, in this case a NumericData type
  and we set the debug value to true so we can see the value at every step
  this is optional as it is a time consuming operation
*/
const chain = new Chain({ value : 0 }, true)

/* Then we add compatible steps to the chain */
chain.AddStep(
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddTwo(),
  /* fixme: the syntax linter recognizes this as invalid, but deno runs it anyways for some reason */
  new ConcatenateString('this should not work because of different types')
)

/* Logging to check the values before executing */
console.log({
  data:chain.data,
  times:chain.execTime,
  initialValue:chain.initialValue
})

/* Finally the chain is executed */
chain.execute()

/* And we have a report of the final values, the  */
console.log({
  data:chain.data,
  execData:chain.execData,
  initialValue:chain.initialValue
})


