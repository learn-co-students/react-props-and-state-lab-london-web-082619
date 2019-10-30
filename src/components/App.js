import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { debug } from 'util'

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

  generateURL = (baseURL, query) => {
    if (query==='all'){
      return baseURL
    } else {
      return `${baseURL}?type=${query}`
    }
  }

  getPets = () => {
    let baseURL = "/api/pets";
    let query = this.state.filters.type;
    let url = this.generateURL(baseURL, query);
    fetch(url).then(resp => resp.json()).then(this.updateStateWithPetsData);
  }

  updateStateWithPetsData = (pets) => {
    this.setState({
      pets: pets
    })
    console.log(this.state.pets)
  }

  onChangeType = (event) => {
    event.persist();
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }
  
  onAdoptPet = petId => {
    const updatedPets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return {
          ...pet,
          isAdopted: true
        }
      } else {
        return pet;
      }
    });

    this.setState({
      pets: updatedPets
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
