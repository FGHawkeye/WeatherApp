import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList'

const cities = [
  'Buenos Aires,ar',
  'Bogota,co',
  'Tokyo,jp',
  'Santiago,cl'
];

function App() {
  return (
    <div className="App">
         <LocationList cities={ cities } ></LocationList>
    </div>
  );
}

export default App;
