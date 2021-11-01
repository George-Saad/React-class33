import React from 'react'

const City = ({ city }) => {
  const { name, sys, weather, main, coord } = city;
  const weatherMain = weather[0].main;
  const weatherDescription = weather[0].description;
  const { country } = sys;
  const { lon, lat } = coord;
  const { temp_min, temp_max } = main;

  return (
    <div className="city-container">
      <h1>{name}, {country}</h1>
      
        <h3 className="weather-main">{weatherMain}</h3>
          <p>
            {weatherDescription}
          </p>
          <p>
            min temp: {temp_min}
          </p>
          <p>
            max temp:  {temp_max}
          </p>         
          <p>
            location: {lon},  {lat}
          </p>
    </div>
  )
}

export default City;