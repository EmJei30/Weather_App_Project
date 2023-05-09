import React, { useEffect, useState } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import '../stylesheets/Weather.css';

function WeatherDisplay({city, weatherData,tempUnit, currentWeather}){

const time = new Date().toLocaleTimeString();


return (
    <>
       
        <div className='weatherContent'>
            <div>
                <h1>{weatherData.name},{weatherData.country}</h1>
                <h6>Updated Today as of {time}</h6>
            </div>
            <div className='currentWeatherInfo'>
                <div className='currentWeatherInfo_details'>
                    <div className='temperature'>
                        <h2 className='temper'>{Math.round(currentWeather.main.temp)}&#176;</h2>
                        <div className='units'>
                            <div className='unit1'>{tempUnit}</div>
                            
                        </div> 
                    </div>
                    <h5 className='description'>{currentWeather.weather[0].description}</h5>
                </div>
                <div className='currentWeatherInfo_image'>
                    <img src={`icons/${currentWeather.weather[0].icon}.png`}/>
                </div>
            </div>
           
        </div>
        <div className='weatherInfo'>
            <div className='row'>
                <div className='card_info_1'>Feels Like {Math.round(currentWeather.main.feels_like)}&#176;{tempUnit}</div>
                <div className='card_info_1'>Wind &nbsp;<NavigationIcon className='navArrow'/>&nbsp; {currentWeather.wind.speed} m/s</div>
                <div className='card_info_1'>Pressure {currentWeather.main.pressure} hPa</div>
                <div className='card_info_1'>Min {Math.round(currentWeather.main.temp_min)}  &#176;{tempUnit}</div>
                <div className='card_info_1'>Humidity {Math.round(currentWeather.main.humidity)}%</div>
                <div className='card_info_1'>Max {Math.round(currentWeather.main.temp_max)} &#176;{tempUnit}</div>
            </div>
        </div>   
        </>
)
};
export default WeatherDisplay;