import React from 'react'
import { useState,useEffect } from 'react'
import moment from 'moment';

const DayCard = ({weather}) => {
  const [daily,setDaily] = useState({})
  const {main} = weather[0].weather[0];
  const capitalizedDescription = main.charAt(0).toUpperCase() + weather[0].weather[0].main.slice(1);
  useEffect(() => {
    if (Object.keys(weather).length === 8) {
      const day = weather.filter(
        (item) => moment.unix(item.dt).utc().format("LT") === "12:00"
      );
      setDaily(day);
    } else {
      const day = weather.filter(
        (item, index) => index === Math.floor(Object.keys(weather).length / 2)
      );

      setDaily(day);
    }
  }, [weather]);

  if (Object.keys(daily).length === 0) return;
  const getWeatherIconClass = (description) => {
    switch (description) {
      case "Clear":
        return "sun";
      case "Clouds":
        return "cloud";
      case "Rain":
        return "rain";
      case "Snow":
        return "snow";
      default:
        return "sun";
    }
  };
        return (
            <div className="weather-wrapper w-[340px] md:w-[380px] lg:w-[180px] rounded-xl ring-8 ring-white ring-opacity-40 align-self">
            <div className="weather-card h-[200px] lg:h-[180px] ">
                <div className={`weather-icon ${getWeatherIconClass(main)}`}></div>
                <h1>{Math.round(weather[0].main.temp_max)}º</h1>
                <p className='description text-sm'>{moment.unix(daily[0].dt).locale("en").utc().format("dddd")}</p>
                <p className='temp text-sm'>{capitalizedDescription}</p>
            </div>
        </div>
        )
    }
    
    export default DayCard;



