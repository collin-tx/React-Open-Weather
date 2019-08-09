import React, { Component } from 'react';


const APIKEY = 'b3b740bbd748af4ac0a19778baa007c1';

export class Weather extends Component {

    state = {
        data: {},
        term: '',
		url: `http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=${APIKEY}`,
		city: 'dallas',
		value: '',
        cities: [
            {
                name: 'Tokyo',
                url: `http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=${APIKEY}`,
                data: []
            },
            {
                name: 'Denver',
                url: `http://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=${APIKEY}`,
                data: []
            }
        ]
    }
    componentDidMount = () => {
		this.makeRequest();
		this.makeRequest2();
		this.makeRequest3();
	}

	makeRequest = () => {
		fetch(this.state.url).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState({
                data: data,
			})
		})
	}

	makeRequest2 = () => {
		fetch(this.state.cities[0].url).then((response) =>{
			return response.json();
		})
		.then((data) => {
			console.log(data);
			this.setState( () => {
               return this.state.cities[0].data = data;
            })
		})
	}

	makeRequest3 = () => {
		fetch(this.state.cities[1].url).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState( () => {
                return this.state.cities[1].data = data;
			})
		})
    }

    changeHandler = (e) => {
		let userInput = e.target.value;
		this.setState( () => {
			return {
				value: userInput
			}
        })
    }
    
    submitHandler = (e) => {
		e.preventDefault();
		let userInput = this.state.value.toLowerCase();
		if (userInput.length > 0){
		this.setState({
            value: '',
            term: userInput,
			}, () => {
                this.state.cities.push({
                    name: userInput,
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${APIKEY}`
                })
            });
		setTimeout(() => {
            this.makeNewRequest();
        }, 100);
	} else {
		document.getElementById('userInput').classList.add('error');
		setTimeout(function(){
			document.getElementById('userInput').classList.remove('error');
		}, 1500);
    }
    console.log(this.state.term);
	}
    
    makeNewRequest = () => {
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.term}&units=imperial&appid=${APIKEY}`;
		fetch(url).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState( () => {
                return this.state.cities[this.state.cities.length - 1].data = data;
            })
		})
		console.log(this.state.cities)
	}


    render() {

        let allCities = this.state.cities.map((city, index) => {
            return (
            <li className="list-group-item" key={index}>
                <h3>{city.data && city.data.name}</h3>
                <img className="sm-img" src={city.data.weather && `http://openweathermap.org/img/w/${city.data.weather[0].icon}.png`} />
                <b>{city.data.weather && city.data.weather[0].description}</b>
                <p>{city.data.main && city.data.main.temp.toFixed(0) + "°"}</p>
            </li>
            )
        });

        return (
            <div id="weather" className="div">
                <form onSubmit={this.submitHandler}>
						<input type="text" onChange={this.changeHandler} id="userInput" className="form-control" value={this.state.value} placeholder="Type a city name..." />
						<button className="btn btn-primary">Submit</button>
					</form>
            <div className="card rounded shadow p-3">
					<h3>{this.state.data && this.state.data.name}</h3>
					<img src={this.state.data.weather && `http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`} alt="wthr img" />
					<p>{this.state.data.weather && this.state.data.weather[0].description}</p>
					<p>{this.state.data.main && this.state.data.main.temp.toFixed(0) + "°"}</p>
					<p>wind speed: {this.state.data.wind && this.state.data.wind.speed.toFixed(0) + " mph"}</p>
					<ul id="list">
					</ul>
				</div>
				<ul className="list-group">
                    {allCities}
				</ul>
            </div>
        )
    }
}

export default Weather
