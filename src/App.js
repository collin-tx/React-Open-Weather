import React, { Component } from 'react';
import Weather from './Components/Weather';
import './App.css';

const APIKEY = 'b3b740bbd748af4ac0a19778baa007c1';

export default class App extends Component {
	state = {
		websiteName: 'Open Weather API',
	}

	render() {

		return (
			<main>
				<h1 className="text-light">{this.state.websiteName}</h1>
				<Weather />
			</main>
		);
	}}