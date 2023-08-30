import AddOne from "./models/add-one-step.ts";
import AddTwo from "./models/add-two-step.ts";
import ConcatenateString from "./models/concatenate-string-step.ts";

import Chain from "./models/chain.ts";

const chain = new Chain({ value : 0 })

chain.AddStep(
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddTwo(),
)

console.log({
  data:chain.data,
  times:chain.execTime,
  initialValue:chain.initialValue
})

chain.execute()

console.log({
  data:chain.data,
  times:chain.execTime,
  initialValue:chain.initialValue
})


