import React, { useEffect, useState } from 'react';
import '../stylesheets/Search.css';
import {baseUrl, baseOptions, GEO_API, WEATHER_API_KEY} from '../api/Weather';

function Search({onSearchCity, setWeatherData, setUnit, unit, setTempUnit,tempUnit}){
    const [searchedCity, setSearchedCity] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCity(searchedCity);
        //passing the search city to the parent/app.js component using callback
        onSearchCity(searchedCity);
    }
    useEffect(()=>{
        setSearchedCity('');
        fetchData();   
    },[city]);

    const fetchData =  () => {
         fetch(`${GEO_API}/direct?q=${city}&limit=5&appid=${WEATHER_API_KEY}`)
        .then((response)=> response.json())
        .then((response)=>setWeatherData(response[0]))
        .catch((err)=> console.log(err));
    }

    const handleTempUnit = () =>{
        if(unit === 'standard'){
            setUnit('metric');
            setTempUnit('C');
        }
        else{
            setUnit('standard');
            setTempUnit('F');
        }

    }
return (
    <>
    <div className='searchContainer'>
        <form className='searchWrapper' onSubmit={handleSubmit}>
            <input type='text' 
                    className='searchBar' 
                    value={searchedCity} 
                    onChange={(e)=>setSearchedCity(e.target.value)} 
                    placeholder='Search'/>
        </form>
        <div className='tempBtn'>
            <input type = 'submit' onClick={handleTempUnit} value ={tempUnit === 'F'? "ºC" : "ºF"}></input>
        </div>
    </div>
    </>
)
};
export default Search;