import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import  axios  from "axios";
export const fetchCityData = createAsyncThunk(
'weather/fetchWeatherForecast',
async(city) => {
       
       const {data: {coord},data:{name:cityName}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a01c0e29532dba3a0f282406a802392f`)
       return { coord, cityName };
    }
)

export const fetchCurrentData = createAsyncThunk("currentData",
async(city) => {
    const currentData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a01c0e29532dba3a0f282406a802392f&lang=tr&units=metric`
    );
    return currentData.data
})

export const fetchWeatherData = createAsyncThunk(
    "weather/getData", async(coord) =>{
        const {data:{list},data:{city}} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=dd461c720d542fd7391e47a87a657487&lang=tr&units=metric`)
        const newList = [];
        list.forEach((item) => {
            const daily = list.splice(0,
                list.filter(
                    (eleman) =>
                      eleman.dt_txt.split("").slice(0, 10).join("") === item.dt_txt.split("").slice(0, 10).join("")
                  ).length);
                  newList.push(daily);
        })
       
        return { newList, city };
    
    })

const weatherSlice = createSlice({
    name:"weather",
    initialState:{
        status:"",
        DataStatus:"",
        CurrentDataStatus:"",
        currentData:{},
        dailyData:[],
        cityName:"",
        coord:{}

    },reducers:{
     setLocation:(state,action) => {
     state.coord = action.payload;
     }
    },
    extraReducers:(builder) =>{
    builder.addCase(fetchCityData.pending,(state) => {
        state.status = "loading";});
    builder.addCase(fetchCityData.fulfilled,(state,action)=> {
        const {coord,cityName} = action.payload;
        state.status = "success";
        state.coord = coord
        state.cityName = cityName });
    builder.addCase(fetchCityData.rejected,(state,action) => {
        state.status = "failed";});
    builder.addCase(fetchCurrentData.pending,(state,action) => {
        state.CurrentDataStatus = "loading";});   
    builder.addCase(fetchCurrentData.fulfilled,(state,action) => {
            state.currentData = action.payload;
            state.CurrentDataStatus = "success"
        });
    builder.addCase(fetchCurrentData.rejected,(state,action) => {
            state.CurrentDataStatus = "failed";
        });
    builder.addCase(fetchWeatherData.pending,(state,action) => {
            state.DataStatus = "loading";
        });
    builder.addCase(fetchWeatherData.fulfilled,(state,action) => {
            const {newList,city} = action.payload;
            state.cityName = city;
            state.dailyData = newList;
            state.DataStatus = "success";
        });
    builder.addCase(fetchWeatherData.rejected,(state,action) => {
        state.DataStatus = "failed"
    });
    },
})

export default weatherSlice.reducer;
export const {selectCity} = weatherSlice.actions
