const actions = require('../actions/zoo-actions')

// test actions
describe('zoo actions', () => {

  test('creates action to add animal', () => {
    const name = 'Tiger',
          expected = {
      type: 'ADD_ANIMAL',
      animal: {
        name: name, 
        isOpenToPublic: false 
      }
    }
    expect(actions.addAnimal(name)).toEqual(expected)
  })

  test('creates action to change animal status', () => {
    const animal = 'Bear',
          status = true,
          expected = {
      type: 'SET_PUBLIC_STATUS',
      animal: {
        name: animal,
        isOpenToPublic: status
      }
    }
    expect(actions.setPublicStatus(animal, status)).toEqual(expected)
  })

  test('creates action to remove animal', () => {
    const name = 'Crocodile',
          expected = {
            type: 'REMOVE_ANIMAL',
            name: name
          }
    expect(actions.removeAnimal(name)).toEqual(expected)
  })
  
})
