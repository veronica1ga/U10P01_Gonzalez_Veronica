import React, { Component } from 'react'
import User from './Civilization'

class CivilizationList extends Component {
  render () {
    return (
        <div>
          {this.props.civilizations.map(c => {
            return (
             
              <User
                key={c.id}
                name={c.name}
                army_type={c.army_type}
                civilization_bonus={c.civilization_bonus}
                expansion={c.expansion}
              />
            );
          })}

        </div>


    );
  }
}

export default CivilizationList;