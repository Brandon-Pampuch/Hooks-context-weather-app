import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Alabama () {

    const [weather, setWeather]=useState("default value")

    useEffect(() =>{
        const fetchData = async () =>{
        const res = await axios('http://api.openweathermap.org/data/2.5/weather?zip=35023,us&appid=c1b91878d87bd4516034e993aa14f682')
        console.log(res)
        
        setWeather(res.data.main.temp)
        }
        fetchData()
    },[])

    const convertKelvin = (res) =>{
        const kelvin = res -273 
        let fahrenheit = kelvin * (9/5) + 32;
        fahrenheit = Math.floor(fahrenheit)
        return fahrenheit
    }


    return ( 
        <div>
        <h1>{convertKelvin(weather)}</h1>
        
        </div>
     );
}

export default Alabama