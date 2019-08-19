import React, { Component } from 'react'

export class Forecast extends Component {
   
    state = {
        data: [],
        city: this.props.city
    }

    componentDidMount(){
        this.getForecast();
    }

    getForecast = () => {
        const city = this.props.city
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b3b740bbd748af4ac0a19778baa007c1`
        fetch(url).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState( () => { data: [...this.state.data, ...data ]})
        })
    }

    displayForecast = (e, index) => {
        let day1 = "tomorrow's high: " + this.state.data[index].list[1].main.temp_max + 'low' + this.state.data[index].list[1].main.temp_min;
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<div>${day1}</div>`
        e.target.parentElement.appendChild(newDiv);
    }
    
    render() {
        return (
          
            <button className="btn btn-sm btn-info" id="moreInfo" onClick={this.displayForecast}>more info</button>

         
        )
    }
}

export default Forecast
