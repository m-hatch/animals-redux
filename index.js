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

// dispatch actions to zoo
console.log('print initial state')
printState()

console.log('add animals')
zoo.dispatch(actions.addAnimal('Lion'))
zoo.dispatch(actions.addAnimal('Tiger'))
zoo.dispatch(actions.addAnimal('Bear'))

console.log('set isOpenToPublic to true')
zoo.dispatch(actions.setPublicStatus('Bear', true))

console.log('remove animals')
zoo.dispatch(actions.removeAnimal('Lion'))