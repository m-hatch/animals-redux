module.exports = (state = [], action = { type: null }) => {
  switch(action.type) {

    case 'ADD_ANIMAL':
      return !state.includes(action.animal) ? 
        state.concat([action.animal]) :
        state

    case 'SET_PUBLIC_STATUS':
      const newState = state.filter(animal => {
        return animal.name !== action.animal.name
      })
      return newState.concat([action.animal])

    case 'REMOVE_ANIMAL':
      return state.filter(animal => {
        return animal.name !== action.name
      })

    default:
      return state

  }
}

/*
 * To combine multiple reducers use the following
 * const Redux = require('redux')
 * const combineReducers = Redux.combineReducers
 * module.exports = combineReducers({reducer, ...})
 */
