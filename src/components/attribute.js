import React from 'react'
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";

const Attribute = ({weather}) => {
        return (
            <div className="w-[340px] sm:w-[620px] md:w-[820px] rounded-xl ring-8 ring-white ring-opacity-40 bg-white p-5">
            <div  className="flex justify-between mx-5">
               <div>
               <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">{weather[0][0].main.humidity}</span>
                <WiHumidity className='w-10 h-10 gray-500 '/> </div>
                <span className="font-semibold text-gray-400">Humidity</span>
               </div>
               <div>
               <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">{weather[0][0].wind.speed}</span>
                  <WiStrongWind className='h-10 w-10 gray'/> </div>
                  <span className="font-semibold text-gray-400">Km/h</span>
               </div>
               <div>
               <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">{weather[0][0].main.pressure}</span>
                  <WiBarometer className='w-10 h-10'/> </div>
                  <span className="font-semibold text-gray-400">Pressure</span>
               </div>
          
                </div>
        </div>
        )
    }
    
    export default Attribute;


           