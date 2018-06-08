const Redux = require('redux')

// create Redux store
const zoo = Redux.createStore((state, action) => [])

// utility function to print state
const printState = () => {
  const state = zoo.getState()
  console.log(state)
}

// print state on state change
zoo.subscribe(printState)

console.log('print initial state')
printState()
