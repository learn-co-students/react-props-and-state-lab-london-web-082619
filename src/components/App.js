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

  onChangeType = (e) => {
    const newType = e.target.value

    this.setState({
      filters: {
        type: newType
      }
    })
  }

  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if(pet.id !== id) return pet
        return {
          ...pet,
            isAdopted: !pet.isAdopted
        } 
      })
    })
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type;
    const baseURL= '/api/pets';
    
    switch (type){
      default:
        fetch(baseURL)
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            ...this.state,
            pets: json
          })
        })
        break;
      case 'cat':
          fetch(baseURL+ '?type=cat')
          .then(resp => resp.json())
          .then(json => {
            this.setState({
              ...this.state,
              pets: json
            })
          })
        break;
      case 'dog':
          fetch(baseURL+ '?type=dog')
          .then(resp => resp.json())
          .then(json => {
            this.setState({
              ...this.state,
              pets: json
            })
          })
        break;
      case 'micropig':
          fetch(baseURL+ '?type=micropig')
          .then(resp => resp.json())
          .then(json => {
            this.setState({
              ...this.state,
              pets: json
            })
          })
        break;
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
