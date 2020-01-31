import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "55b6562f722b92a76bc66b51a682e37e";

class WeatherLocation extends Component {

constructor({ city }){
    super();
    this.state = {
        city,
        data: null
    }
}

componentWillMount(){
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    console.log(api_weather);

    fetch(api_weather).then(
        data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        });
}

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={80}/>}
            </div>);
    }
}

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick : PropTypes.func,
}

export default WeatherLocation;