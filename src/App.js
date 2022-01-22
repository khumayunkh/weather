import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const [weather, setWeather]= useState({})
  const {register, handleSubmit, reset}= useForm()
  const nameOfCity = register('city')
  const onSubmit = async (data)=>{
    const payload ={
      q: data.city,
      appid: '64511737548f80e4e4992aac79e10b3a'
    }
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {params:payload})
    console.log(response.data)
    setWeather(response.data)
    
    reset()
  }
  return (
    <>
    <div className="header">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='form'>
          <input {...nameOfCity} className='input' placeholder='Name of city'/>
           <button className='button'>
            Go
           </button>
       </div>
      </form>
    </div>
    <div className='mainm'>
     <div className='main'>
       <div className='count'>{weather?.name}</div>
       <div className='temp'>{weather?.main?.temp_max} Fahrenheit!</div>
       <div>
            <div className="my-1"> <img className="my-1" src="https://i.imgur.com/Qw7npIg.png" /> </div>
            
       </div>
     </div>
    </div>
    </>
  );
}

export default App;
