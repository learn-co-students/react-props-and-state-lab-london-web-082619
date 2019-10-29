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
    const type = event.target.value;
    this.setState({
      filters: {
        type
      }
    });
  }

  onFindPetsClick = () => {
    const app = this;
    fetch(this.getFetchURL())
      .then(res => res.json())
      .then(pets => app.setState({ pets }))
      .catch(console.error);
  }

  getFetchURL = () => {
    const baseURL = "/api/pets"
    if (this.state.filters.type === "all") {
      return baseURL;
    } else {
      return baseURL + `?type=${this.state.filters.type}`
    }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
