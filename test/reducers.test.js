const reducer = require('../reducers/zoo-reducer')

// test reducers
describe('zoo reducers', () => {

  test('sets empty initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  test('adds a new animal', () => {
    const animal = { name: 'Dragon', isOpenToPublic: false },
          action = { 
            type: 'ADD_ANIMAL', 
            animal
          }
    expect(reducer([], action)).toEqual([animal])
  })

  test('sets animal public status', () => {
    const prevState = [{ name: 'Monkey', isOpenToPublic: false }],
          nextState = [{ name: 'Monkey', isOpenToPublic: true }],
          action = { 
            type: 'SET_PUBLIC_STATUS', 
            animal: { 
              name: 'Monkey', 
              isOpenToPublic: true 
            }
          }
    expect(reducer(prevState, action)).toEqual(nextState)
  })

  test('removes animal from zoo', () => {
    const prevState = [{ name: 'Bear', isOpenToPublic: true }],
          action = { type: 'REMOVE_ANIMAL', name: 'Bear'}

    expect(reducer(prevState, action)).toEqual([])
    expect(reducer(prevState, action)).not.toEqual(prevState)
  })

})