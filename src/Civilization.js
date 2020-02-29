import React, { Component } from 'react';

class Civilization extends Component {
	render() {
	return ( 
		<div className="civilizacion">
			<div className="cuadroCivilizacion">
			<ul> 
			<h1>Nombre de la civilización: </h1>
				<li>{ this.props.name }</li>
				<h5>Army-type: </h5>
				<li>{ this.props.army_type }</li>
				<h5>Expansion: </h5>
				<li>{ this.props.expansion }</li>
				<h5>Civilization_bonus: </h5>
				{this.props.civilization_bonus.map(s => (<li>{s},</li>))}
			</ul>
			</div>
			</div>
			
        );
	}
}

export default Civilization;