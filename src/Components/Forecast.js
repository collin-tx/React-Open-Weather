import React, { Component } from 'react';
/* eslint-disable */
export class Forecast extends Component {
   
    state = {
        data: [],
        city: this.props.city,
        display: false,
        tomorrow: ''
    }

    componentDidMount(){
        this.getForecast();
    }

    getForecast = () => {
        const cityID = this.props.cityID
        console.log(cityID)
        const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=b3b740bbd748af4ac0a19778baa007c1`
        fetch(url).then(response => response.json())
        .then(data => {
            console.log(data);
            this.state.data.push(data);
            this.setState({ data: [...this.state.data, ...data] })
        })
    }

    displayForecast = (e) => {
        let tomorrow = this.state.data[0] && "tomorrow's high: " + this.state.data[0].list[7].main.temp_max + ' low: ' + this.state.data[0].list[7].main.temp_min;
        this.setState( () => { 
            return { display: true, tomorrow } 
        })
        let day1 = "tomorrow's high: " + this.state.data[0].list[7].main.temp_max + ' low: ' + this.state.data[0].list[7].main.temp_min;
         console.log(day1);
        // let newDiv = document.createElement('div');
        // newDiv.innerHTML = <div>{day1}</div>
        // e.target.parentElement.appendChild(newDiv);
    }
    
    render() {
        return (
            <div>
            <button className="btn btn-sm btn-info" id="moreInfo" onClick={this.displayForecast}>more info</button>
            <div className="tomorrowDisplay">
                {this.state.display && this.state.tomorrow}
            </div>
            </div>
        )
    }
}

export default Forecast
