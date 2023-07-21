import React from 'react'
import { useSelector } from 'react-redux'


function MainDayCard() {
    const { currentData,dailyData} = useSelector((state) => state.weather)
    const moment = require("moment-timezone");
    require("moment/locale/tr");
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
       
       const {main} = currentData.weather[0]
    
  
  return (
    <div className="w-[340px] sm:w-[620px] md:w-[820px] mb-[15px] bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 align-self">
    <div className="flex justify-between">
        <div className="flex flex-col">
            <span className="text-6xl font-bold">{`${Math.round(currentData.main.temp)}°C`}</span>
            <span className="font-semibold mt-1 text-gray-500">{currentData.name}</span>
        </div>
        <div className={`weather-icon ${getWeatherIconClass(main)}`}></div>
    </div>
   <div  className="flex justify-between mt-12">{
    
    dailyData[0].map((item,index) => (
        
        <div key={index} className="flex flex-col items-center">
            <span className="font-semibold text-lg">{`${Math.round(item.main.temp)}°C`}</span>
             {
                moment.unix(item.dt).format("HH:mm") === "21:00" ? (<svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z"/><path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"/></g></g></svg>)
                 :  moment.unix(item.dt).format("HH:mm") === "00:00" ? (<svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z"/><path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"/></g></g></svg>) 
                 : (<svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>)
             }
            <span className="font-semibold mt-1 text-sm">{moment.unix(item.dt).format("HH:mm")}</span>
            <span className="text-xs font-semibold text-gray-400">AM</span>
        </div>
    
    ))
   }
   </div>
</div>
  )
}

export default MainDayCard
