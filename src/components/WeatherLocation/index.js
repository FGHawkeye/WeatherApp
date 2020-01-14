import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY } from './../../constants/Weathers';

const data= {
    temperature: 20,
    weatherState: SNOW,
    humidity: 10,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Buenos Aires'}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;