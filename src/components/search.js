import React,{useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData,fetchCurrentData,fetchCityData}from '../redux/weatherSlice'
import Toast from './Error';

function Search() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();
    const {coord} = useSelector((state) => state.weather)
    const handleSubmit = (event) => {
      event.preventDefault();
      const validCity = /^([A-Za-zğüşöçıİĞÜŞÖÇ\s]*)$/gi;
      if (!city) {
       setShow(true)
       setMessage("Enter CityName")
      } else if (!validCity.test(city)) {
        setShow(true)
        setMessage("CityName is invalid")
        setCity("");
      } else {
        dispatch(fetchCityData(city));
        dispatch(fetchCurrentData(city));
        dispatch(fetchWeatherData(coord));
        setCity("");
      }
    };

  return (
    <>
     
     <div className='flex justify-center m-5'>
      <p className='text-gray-500 italic mt-4 text-2xl'>Search City</p>
      {show && <Toast message={message} setShow={setShow}/>}
    </div>
    
    <div className="flex  justify-center">
   
  <div className="mb-3 xl:w-96">
  <form onSubmit={handleSubmit}>
    <div className="input-group relative flex  items-stretch w-full mb-4">
      <input 
      type="search"
      id='city'
      name='city'
      value={city}
      onChange={(e) => setCity(e.target.value)}

      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      <button type="submit" className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"  id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
    </form>
  </div>
</div>
</>
 
);
};

export default Search


