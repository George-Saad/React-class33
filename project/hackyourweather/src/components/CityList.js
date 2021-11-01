import React from 'react'
import City from './City'
import cityList from "../city-weather.json";

const CityList = () => {
  console.log(cityList.length);
  return (
    <div className="city-list">
      {
        cityList.map(city => <City key={city.id} city={city} />)
      }
    </div>
  )
}

export default CityList;