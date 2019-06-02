import React from 'react';
import axios from 'axios'
import { useState, useEffect} from 'react'
import { Route, Link } from 'react-router-dom'
import Tennesse from './Tennesse';
import Minnesota from './Minnesota';
//context 
const StateContext = React.createContext("apple")
//provider component

function Landing () {
   
    const [weather, setWeather]=useState("")

    useEffect(() =>{
        const fetchData =  () =>{ 
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=37174,us&appid=c1b91878d87bd4516034e993aa14f682')
        .then((res)=>{
            const temp = res.data.main.temp
            let fahrenheit = Math.floor((temp -273) * (9/5) + 32);
            console.log(fahrenheit)
            setWeather(fahrenheit)
        }).catch((error)=>{
            console.log(error)
        })
    }
        fetchData()
    },[])

return (
  
    <StateContext.Provider value={[weather, setWeather]}>
    <div>
       
        <h1>Weather App for Mom!</h1>
        <button><Link to={"/Tennesse"}>SpringHill</Link></button>
        <button><Link to={"/Minnesota"}>Canton</Link></button>
        <button><Link to={"/Alabama"}>Hueytown</Link></button>
        <button><Link to={"/"}>Home</Link></button>
    </div>
    </StateContext.Provider>
     );
}
 
export default Landing;