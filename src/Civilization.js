import React, { Component } from 'react';

class Civilization extends Component {
	
	
	render() {
		return ( 
		<div className="civilización">
			<dl> 
			<dt>Nombre de la civilización: </dt>
				<dd>{ this.props.name }</dd>
				<dt>Army-type: </dt>
				<dd>{ this.props.army_type }</dd>
				<dt>Expansion: </dt>
				<dd>{ this.props.expansion }</dd>
				<dt>Civilization_bonus: </dt>
				{this.props.civilization_bonus}
			</dl>
			</div>
        );
    }
}

export default Civilization;