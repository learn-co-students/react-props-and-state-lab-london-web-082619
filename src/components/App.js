import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    this.setState({ 
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  fetchPets = event => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }

    fetch(endpoint)
    .then(resp => resp.json())
    .then(pets => this.setState({ pets }))

  }
  // the below method has a ternery operator. If the passed-in petID matches the pet id that is currently being iterated over (from App's state's pet array) then it will return a new object which firstly spreads the existing key:value pairs from the pet into a new object and then sets the isAdopted value to true. If it's not found then it just returns unchanged array, 'pets', which is then passed as an object into the setState method. So basically when u click the button to adopt it iterates over every single pet, and when it finds a pet that matches the passed in id (which is taken from the event itself, see Pet.js) it will update the state key of isAdopted to true. Fuckin yeet
  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
