import { count } from 'console';
import { isTargetLikeServerless } from 'next/dist/next-server/server/config';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const ApiKey = "d8a73afa46028a6a609b4f46166796ad"
const weatherWeb = "api.openweathermap.org/data/2.5/weather?q="

export default function Home(){
  const [city, setCity] = useState<string>("");
  const [weather, setWeather]= useState([]);
  return (
    <div className = "website">
        <div className = "textInputs">
          < input
          type = "text"
          className = "cityInputs"
          placeholder= "City"
          value = {city}/////////////////////////////////////////////////
          onChange ={updateTextCity}
          />
          <button  onClick = {buttonClick}>Search</button>
       
        </div>
        
        {(typeof weather.main != "undefined") ? (
        
          <div className = "Output">
            <p>hey</p>
          </div>
        ):("")}
    </div>
  )
  ///////////////////////////////////////////////////////////
  async function buttonClick()
  {
    const apiData = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ApiKey)
    .then(res=>res.json())
    .then(data=> {
      setWeather(data)
      console.log(data);
    })
   
   // console.log(JSON.stringify(weather))
    
  }
  function updateTextCity(event)
  {
    setCity(event.target.value)
    setWeather([])
    console.log(city)
  }
  
}
