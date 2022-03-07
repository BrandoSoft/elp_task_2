import React, {FC, useState, FormEvent} from 'react';
import {WeatherData, WeatherbitData, ComponentData} from './types'
import  WeatherInfo from './components/WeatherInfo'
import axios from 'axios'


const App: FC =()=> {

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [alternate, setAlternate] = useState(true)
  const [data, setData] = useState<ComponentData>()

  const changeSource = () =>{

      if(latitude.length > 0 && longitude.length > 0 ){
      setAlternate(!alternate)
          fetchData()
      }else{
      console.log('You need to provide inputs, before u change source')
      }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   fetchData()
  }

  const fetchData = () =>{
       if( /^[\d.-]+$/i.test(latitude) && /^[\d.-]+$/i.test(longitude)) {
           if((Number(latitude) >= -90 && Number(latitude) <= 90) && (Number(longitude) >= -180 && Number(longitude) <= 180)){
                 if(latitude.length > 0 && longitude.length > 0 && alternate){
                             console.log(getWeather(longitude, latitude))
                 }
                 if(latitude.length > 0 && longitude.length > 0 && !alternate){
                     console.log(getWeatherAlternate(longitude, latitude))
                 }
           }else{
           console.log('Inputs are out of range')}
       }else{
       console.log('Only numbers Allowed')}
  }

  const lonHandler = (e: FormEvent<HTMLInputElement>) => {
      setLongitude(e.currentTarget.value);
  }

  const latHandler = (e: FormEvent<HTMLInputElement>) => {
      setLatitude(e.currentTarget.value);
  }

 const getWeather = (lon: string, lat: string): Promise<WeatherData> | string => {
    try{
            axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_API_KEY_WEATHERBIT}&units=m`)
            .then(res => {
            const componentData : ComponentData = {
              humidity: res.data.data[0].rh,
              temp: res.data.data[0].temp,
              title: 'Weatherbit.io'
              };
              setData(componentData);
              });
            return 'Weatherbit.io'

    }catch(err){
        throw(err)
    }
  }
   const getWeatherAlternate = (lon: string, lat: string): Promise<WeatherData> | string => {
      try{
              axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&appid=${process.env.REACT_APP_API_KEY_OPENWEATHERMAP}&units=metric`)
              .then(res => {
              const componentData : ComponentData = {
              humidity: res.data.current.humidity,
              temp: res.data.current.temp,
              title: 'Openweathermap.org'
              };
              setData(componentData);
              });
              return 'Openweathermap.org'

      }catch(err){
          throw(err)
      }
    }
    console.log(data)
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input  type="text"
                className="lonInp"
                placeholder="enter longitude"
                value={longitude}
                onChange={lonHandler}
            />
            <input
                type="text"
                className="latInp"
                placeholder="enter latitude"
                value={latitude}
                onChange={latHandler}
            />
            <button className='submitForm'>Search</button>
      </form>
      <button onClick={changeSource} className='changeSourceBtn'>Change Source</button>
      {data?<WeatherInfo data={data}/>: null}

    </div>
  );
}

export default App;
