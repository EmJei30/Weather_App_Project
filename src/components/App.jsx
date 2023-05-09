import '../stylesheets/App.css';
import Axios from 'axios';
import React , {useState, useEffect}from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import WeatherDisplay from './WeatherDisplay';
import WeatherForecast from './WeatherForecast';
import { WEATHER_API, WEATHER_API_KEY } from '../api/Weather';
import Search from './Search';



function App(){

    const [cityName, setCityName] = useState('');  
    const [weatherData, setWeatherData] = useState([]);
    const [lon ,setLon] = useState('');
    const [lat ,setLat] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const [unit, setUnit] = useState('standard');
    const [tempUnit, setTempUnit] = useState('F');

    useEffect(()=>{
        if(weatherData){
            setLon(weatherData.lon);
            setLat(weatherData.lat);
        }

    },[weatherData]);

    useEffect(()=>{
        if(lon && lat){
            fetchCurrentWeather();
            fetchtWeatherForecast();
        }
    },[lon, lat, unit]);
       
    //fetch the current weather
    const fetchCurrentWeather =  () => {
       fetch(`${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${unit}`)
        .then((response)=> response.json())
        .then((response)=>setCurrentWeather(response))
        .catch((err)=> console.log(err));
    }

    //fetch the weather forecast
    const fetchtWeatherForecast = () => {
         fetch(`${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${unit}`)
        .then((res)=> res.json())
        .then((res)=>setForecastWeather(res))
        .catch((err)=> console.log(err));
    }

    const onSearchCity =(data)=>{
        setCityName(data) 
    }   
    // console.log(unit);
    console.log(forecastWeather);
    return (
        <div className='container'>
            
            <Search 
                onSearchCity={onSearchCity} 
                setWeatherData={setWeatherData} 
                setUnit = {setUnit} 
                unit = {unit}
                setTempUnit={setTempUnit}
                tempUnit = {tempUnit}
                />
            {weatherData &&
            <div className='weatherContainer'>
                {currentWeather &&
                    <WeatherDisplay 
                        city = {cityName} 
                        weatherData = {weatherData} 
                        tempUnit = {tempUnit}
                        currentWeather = {currentWeather}/> 
                }
                {forecastWeather && 
                    <WeatherForecast 
                        forecastWeather ={forecastWeather}
                        tempUnit = {tempUnit}/>
                }                   
            </div> 
            }
        </div>
    )
}
export default App;
