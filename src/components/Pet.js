import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      // for the gender we will use a ternery operator since we can't use if/else in JSX
      <div className="card">
        <div className="content">
          <a className="header">
            Name: {this.props.pet.name}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} Years</p>
            <p>Weight: {this.props.pet.weight}KG</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
