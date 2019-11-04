import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // so here we recieve an array of pets passed down as a prop from App.js's state.
  // there is a child component of this one, Pet, which is going to have each pet passed into it 
  // by this component via .map. 
  // For each pet component created for each pet, we are going to pass in the needed props
  // In this case we pass the pet object from the array into a 'pet' prop, and create a key prop for each which we assign to be the pet.id. We assign this process to a variable, petCards, which we can pass into this component's render method. 

  render() {

    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
