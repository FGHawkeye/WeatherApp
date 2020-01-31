import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './';


const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }

    const strToComponent = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}>

                </WeatherLocation>
            ))
    );

    
    return (<div>
        {strToComponent(cities)}
    </div>);
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;