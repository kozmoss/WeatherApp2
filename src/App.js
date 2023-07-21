import './App.css';
import Search from './components/search';
import WeatherCard from './components/weathercard';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';
import Toast from './components/Error';
import Footer from './components/Footer';


function App() {
  const {DataStatus} = useSelector((state) => state.weather.DataStatus)
  if(DataStatus === "loading") return <Loading/>
  if(DataStatus === "failed") return <Toast message={"failed"}/>
  return (
  <div className='w-full h-full'>
   <Search/>
   <WeatherCard/>
   <Footer/>
  </div>
  );
}

export default App;
