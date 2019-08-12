import React from 'react';

const WeatherList = (props) => {

    const CitiesList = ({data}) => {
        console.log(data);
        return data.map(city => {
            return (
                <li className="list-group-item" key={city.id}>
                    <h4>{city.name}</h4>
                    <img className="sm-img" src={city.weather && `http://openweathermap.org/img/w/${city.weather[0].icon}.png`} />
                    <b>{city.weather && city.weather[0].description}</b>
                    <p>{city.main && city.main.temp.toFixed(0) + "°"}</p>
                </li>
            )
        })
    }




return (
    <div id="weather">
       {/* <div className="card rounded shadow p-3">
            <h3>{props.name}</h3>
            <img src={props.weather && `http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt="wthr img" />
            <p>{props.weather && props.weather[0].description}</p>
            <p>{props.main && props.main.temp.toFixed(0) + "°"}</p>
            <p>wind speed: {props.wind && props.wind.speed.toFixed(0) + " mph"}</p>     
        </div>*/}
        
        <ul className="list-group">
            {props.data && <CitiesList data={props.data} />}
        </ul>
    </div>
)

}

export default WeatherList;