## What's this? 🎃

A quick PoC to the idea of having a chain of responsability pattern on Deno with statistics reporting in every step.

## Why? 🤔

This could be usefull in projects with multiple steps that builds a response for a specific request of an user, so we can track the performance and status in every step in order to fix bugs and improve performance.

## But the code looks weird... 😕

It's ok, this was made in a couple of minutes just to poke around the idea, I'll keep playing with this, improving the syntax and adding features.

## Sample execution

### Code

```js
/* We create a new chain with an object that has only a property with a numeric value */
const chain = new Chain({ value : 0 })

/* Then we add compatible steps to the chain */
chain.AddStep(
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddOne(),
  new AddTwo(),
)
```

### Output

```js
{
  data: { value: "7" },
  initialValue: { value: 0 },
  execData: [
    {
      timeElapsedMS: 0.008070000000000022,
      functionName: "AddOne",
      valueAtStep: { value: 1 },
      stepNumber: 1
    },
    {
      timeElapsedMS: 0.0010900000000013677,
      functionName: "AddOne",
      valueAtStep: { value: 2 },
      stepNumber: 2
    },
    {
      timeElapsedMS: 0.0008599999999994168,
      functionName: "AddOne",
      valueAtStep: { value: 3 },
      stepNumber: 3
    },
    {
      timeElapsedMS: 0.0008299999999987762,
      functionName: "AddOne",
      valueAtStep: { value: 4 },
      stepNumber: 4
    },
    {
      timeElapsedMS: 0.009770000000001389,
      functionName: "AddOne",
      valueAtStep: { value: 5 },
      stepNumber: 5
    },
    {
      timeElapsedMS: 0.005029999999999646,
      functionName: "AddTwo",
      valueAtStep: { value: 7 },
      stepNumber: 6
    },
  ]
}
```