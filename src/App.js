import React, { Component } from 'react';
import News from './Components/NewsComponent';
import Restaurants from './Components/Restaurants';
import Weather from './Components/Weather';
import Books from './Components/Books';
import './App.css';

const APIKEY = 'b3b740bbd748af4ac0a19778baa007c1';

export default class App extends Component {
	state = {
		websiteName: 'Fun with APIs',
	}

	componentDidMount = () => {
		setTimeout(function(){
			document.getElementById('loading').classList.add('hide');
			document.getElementById('page').classList.remove('hide');
		}, 1000)
	}

	render() {

		return (
			<main>
				<div id="loading">
					<p className="loading-text">Loading...</p>
				</div>
				<div id="page" className="hide">
					<h1 className="text-light">{this.state.websiteName}</h1>
					<Weather name={this.state.cities}/>
					<News />
					<Restaurants />
					<Books />
				</div>
			</main>
		);
	}}