import React from 'react'

class Pet extends React.Component {


  // genderAllocation = () => {
  //   if(this.props.pet.gender === 'male'){return '♂'}
  //   else {return '♀'}
  // }


  render() {

    const{age, id, gender, isAdopted, name, type, weight} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂' : '♀'}
            {/* {this.genderAllocation()} */}
            {type}: {name}
          </a>
          <div className="meta">
            <span className="date"></span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button className="ui primary button" onClick={() => {this.props.onAdoptPet(id)}}>Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
