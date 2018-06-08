module.exports = (state = [], action = { type: null }) => {
  switch(action.type) {

    case 'ADD_ANIMAL':
      return state

    case 'SET_PUBLIC_STATUS':
      return state

    case 'REMOVE_ANIMAL':
      return state

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
