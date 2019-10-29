import React from 'react'

class Pet extends React.Component {
  render() {
    const {type, gender, age, weight, name, isAdopted, id} = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}kg</p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted === false ?
              <button className="ui primary button" onClick={()=>this.props.onAdoptPet(id)}>Adopt pet</button>
            :
              <button className="ui disabled button" >Already adopted</button>
          }
          
        </div>
      </div>
    )
  }
}

export default Pet
