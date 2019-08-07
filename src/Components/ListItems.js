import React, { Component } from 'react';

export default class ListItem extends Component {

	render() {
		return (
			<li className="list-group-item text-left">
				<h2>{this.props.city}</h2>
				
			</li>
		);
	}
}
