module.exports.addAnimal = (name) => {
  return { 
    type: 'ADD_ANIMAL', 
    animal: { 
      name: name, 
      isOpenToPublic: false 
    }
  }
}

module.exports.setPublicStatus = (name, status) => {
  return { 
    type: 'SET_PUBLIC_STATUS', 
    animal: { 
      name: name, 
      isOpenToPublic: status 
    }
  }
}

module.exports.removeAnimal = (name) => {
  return {
    type: 'REMOVE_ANIMAL',
    name
  }
}