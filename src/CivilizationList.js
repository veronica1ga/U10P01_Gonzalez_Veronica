import React, { Component } from 'react'
import User from './Civilization'

class CivilizationList extends Component {
  render () {
    return (
        <div>
          {this.props.civilizations.map(u => {
            return (
              <User
                key={u.id}
                name={u.name}
                army_type={u.army_type}
                civilization_bonus={u.civilization_bonus}
                expansion={u.expansion}
              />
            );
          })}
        </div>
    );
  }
}

export default CivilizationList;