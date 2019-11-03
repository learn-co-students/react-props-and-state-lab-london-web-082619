import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const baseURL = '/api/pets'

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

  adopt = (id) => {
    this.state.pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
    })
      // console.log('onAdoptPet triggered')
  }

  changeType = (e) => {
    this.setState({
      filters: {
      type: e.target.value
    }})
  }

  onFindPetsClick = () => {
    console.log('on find pets click')
    if(this.state.filters.type === 'all'){
      fetch(baseURL)
      .then(resp => resp.json())
      .then(pets => this.setState({pets: pets}))
    } else {
      fetch(baseURL+`?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(pets => this.setState({pets: pets}) )
    }
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
