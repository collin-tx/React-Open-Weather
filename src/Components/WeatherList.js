import React from 'react';
/* eslint-disable */

const WeatherList = ({ data }) => {
    
    const convertKtoF = degree => {
        return Math.round(1.8 * (degree - 273) + 32)
      }

      const removeItem = (e) => {
        e.target.parentElement.parentElement.classList.add('hide');
      }

      const moreInfo = (e) => {
          console.log('more info clicked')
      }

    return (
        <div id="weather">
            <ul className="list-group">
                {data.map(city => {
                    return (
                        <li className="list-group-item" key={city.id}>
                            <div className="col info">
                            <h4>{city.name}</h4>
                            <img className="sm-img" src={city.weather && `http://openweathermap.org/img/w/${city.weather[0].icon}.png`} />
                            <p>{city.weather && city.weather[0].description}</p>
                            </div>
                            <div className="col temp">
                                <p>Current: {convertKtoF(city.main && city.main.temp).toFixed(0) + "°"}</p>
                                <p>High: {convertKtoF(city.main && city.main.temp_max).toFixed(0) + "°"}</p>
                                <p>Low: {convertKtoF(city.main && city.main.temp_min).toFixed(0) + "°"}</p>
                            </div>
                            <div className="col btns">
                                <button className="btn btn-sm btn-danger" id="remove" onClick={removeItem}>remove</button>
                                <button className="btn btn-sm btn-info" id="moreInfo" onClick={moreInfo}>more info</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default WeatherList;