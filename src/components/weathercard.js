import React, { useEffect } from 'react';
import DayCard from './DayCard';
import { useSelector,useDispatch } from 'react-redux';
import MainDayCard from './MainDayCard';
import Attribute from './attribute';
import { fetchCityData,fetchCurrentData,fetchWeatherData } from '../redux/weatherSlice';

    const WeatherCard = () => {
      const { dailyData,DataStatus } = useSelector((state) => state.weather);
      const coord = {lat: 41.0351,lon: 28.9833};
      const dispatch = useDispatch();
      useEffect(()=>{
      if(DataStatus === ""){
        dispatch(fetchWeatherData(coord))
        dispatch(fetchCityData("istanbul"));
      dispatch(fetchCurrentData("istanbul"));
      
      }
      },[DataStatus,dispatch])

   
        return (
          <>
       {
        DataStatus === "success" && (
          <div className="flex flex-col items-center">
  
          <MainDayCard />
          <Attribute weather={dailyData}/>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {dailyData.slice(1).map((item,index) => (
              <DayCard weather={item} key={index} />
            ))}
          </div>
        </div>
        )
       }
         </>
        );
      };
      

export default WeatherCard;

