import React from 'react';

const WeatherList = ({ data }) => {
    return (
        <div id="weather">
            <ul className="list-group">
                {data.map(city => {
                    return (
                        <li className="list-group-item" key={city.id}>
                            <h4>{city.name}</h4>
                            <img className="sm-img" src={city.weather && `http://openweathermap.org/img/w/${city.weather[0].icon}.png`} />
                            <b>{city.weather && city.weather[0].description}</b>
                            <p>{city.main && city.main.temp.toFixed(0) + "°"}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default WeatherList;