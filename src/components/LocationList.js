import React from 'react';
import WeatherLocation from './WeatherLocation';
import propTypes from 'prop-types';
import'./styles.css';

const LocationList = ({ cities,onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const strToComponents = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key= {city.key} 
                    city= {city.name} 
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} 
                    data={city.data}/>))
    );

    return (<div className="locationList">
        {strToComponents(cities)}
    </div>)
}

LocationList.propTypes = {
    cities: propTypes.array.isRequired,
    onSelectedLocation: propTypes.func,
}
export default LocationList;