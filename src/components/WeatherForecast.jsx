import '../stylesheets/Weather.css';
import Img from '../assets/images/icon.png';

//create an array of days
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function WeatherForecast({forecastWeather, tempUnit}){

    const date = new Date().getDate();
    const month = new Date().toLocaleString('default', {month: 'short'}); 
    //determine what day today, and get the forcast for succeding days
    //determine the day and returns a number
    const dayInAWeek = new Date().getDay();
    //
    const forecastDays = weekdays.slice(dayInAWeek, weekdays.length).concat(weekdays.slice(0,dayInAWeek));

// console.log(forecastDays);
console.log(date);
// console.log(month);
    

    
    return(
        <div className='daily_forecast'>
            <div className='forecast_timeline'>
                <div className='daily'>Daily Weather Forecast</div>
            </div>
            <div className='forecast_row'>
            {forecastWeather.list.splice(0, 6).map((item, index)=>(
                <>
                    <div className='col' key = {index}>
                        <div>{forecastDays[index]} &nbsp; {month} &nbsp; {date + index +1} </div>
                        <div><img src ={`icons/${item.weather[0].icon}.png`}/></div>
                        <div>{Math.round(item.main.temp)}&nbsp;&#176;{tempUnit}</div>
                        {/* <div>Min:&nbsp;{Math.round(item.main.temp_min)}&#176;{tempUnit}</div> */}
                        <div>Max :&nbsp;{Math.round(item.main.temp_max)}&nbsp;&#176;{tempUnit}</div>
                        <div>{item.weather[0].description}</div>
                    </div>
                   
                </>
            ))}
            </div>   
        </div> 
    )
}
export default WeatherForecast;