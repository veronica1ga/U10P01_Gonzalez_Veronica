// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import CivilizationList from './CivilizationList';
import logo from './ageofempires.jpg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      civilizations: []
    };
  }
  
    componentDidMount() {
    fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            civilizations: result.civilizations
          });
        }
      )
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      army_type: event.target.army_type.value,
      civilization_bonus:event.target.civilization_bonus.value,
      expansion: event.target.expansion.value
    };

    let list = {
      name: event.target.name.value
    };
    this.setState({
      civilizations: this.state.civilizations.concat([user]),
      civilizationsNom: this.state.civilizationsNom.concat([list])
    });
  }

  render() {
    console.log(this.state.civilizations.name);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a Age of Empires</h2>
        </div>
        <div>
          <CivilizationList civilizations={this.state.civilizations}  />
        </div>
      </div>
    );
  }
}

export default App;