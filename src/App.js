import React, { Component } from 'react';
//import ListItem from './Components/ListItems'
import './App.css';

const APIKEY = 'b3b740bbd748af4ac0a19778baa007c1';

export default class App extends Component {
	state = {
		websiteName: 'Open Weather Map!',
		data: {},
		url: `http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=${APIKEY}`,
		city: 'dallas',
		value: '',
		newCity: {
			name: 'Tokyo',
			url: `http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=${APIKEY}`,
			data: {}
		},
		city3: {
			url: `http://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=${APIKEY}`,
			data: {},
			name: 'Denver'
		}
		
	}

	componentDidMount() {
		this.makeRequest();
		this.makeNewRequest();
		this.otherRequests();
	}

	makeRequest = () => {
		fetch(this.state.url).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState({
				data: data
			})
		})
	}

	otherRequests = () => {
		fetch(this.state.city3.url).then((response) =>{
			return response.json();
		})
		.then((data) =>{
			console.log(data);
			this.setState({
				city3: {
					data: data
				}
			})
		})
	}

	makeNewRequest = () => {
		fetch(this.state.newCity.url).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState({
				newCity: {
					data: data
				}
			})
		})
	}

	changeHandler = (e) => {
		let userInput = e.target.value;
		this.setState({
			value: userInput
		})
	}

	submitHandler = (e) => {
		e.preventDefault();
		let userInput = this.state.value.toLowerCase();
		if (userInput.length > 0){
		this.setState({
			value: '',
			city3: {
			name: userInput,
			url: `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${APIKEY}`
			}
		})
	} else {
		document.getElementById('userInput').classList.add('error');
		setTimeout(function(){
			document.getElementById('userInput').classList.remove('error');
		}, 1500);
	}
	// this.otherRequests();
	}

	render() {
		return (
			<main>
				<h1 className="text-light">{this.state.websiteName}</h1>
				<form onSubmit={this.submitHandler}>
					<input type="text" onChange={this.changeHandler} id="userInput" className="form-control" value={this.state.value} placeholder="Type a city name..." />
					<button className="btn btn-primary">Submit</button>
				</form>
				<div className="card rounded shadow p-3">
					<h2>{this.state.data.name}</h2>
					<img src={this.state.data.weather && `http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`} alt="wthr img" />
					<p>{this.state.data.weather && this.state.data.weather[0].description}</p>
					<p>{this.state.data.main && this.state.data.main.temp.toFixed(0) + "°"}</p>
					<p>wind speed: {this.state.data.wind && this.state.data.wind.speed.toFixed(0) + " mph"}</p>
					<ul id="list">
					</ul>
				</div>
				<ul className="list-group">
					<li className="list-group-item">
						<h3>{this.state.newCity.data && this.state.newCity.data.name}</h3>
						<p>{this.state.newCity.data.weather && this.state.newCity.data.weather[0].description}</p>
						<p>{this.state.newCity.data.main && this.state.data.main.temp.toFixed(0) + "°"}</p>
					</li>
					<li className="list-group-item">
						<h3>{this.state.city3.data.name}</h3>
						<p>{this.state.city3.data.weather && this.state.city3.data.weather[0].description}</p>
						<p>{this.state.city3.data.main && this.state.city3.data.main.temp.toFixed(0) + "°"}</p>
					</li>
				</ul>
			</main>
		);
	}}