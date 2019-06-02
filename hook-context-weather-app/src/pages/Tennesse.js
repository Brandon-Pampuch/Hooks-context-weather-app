import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Tennesse () {

    const [weather, setWeather]=useState("")

    useEffect(() =>{
        const fetchData =  () =>{
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=37174,us&appid=c1b91878d87bd4516034e993aa14f682')
        .then((res)=>{
            const temp = res.data.main.temp
            let fahrenheit = Math.floor((temp -273) * (9/5) + 32);
            setWeather(fahrenheit)
        }).catch((error)=>{
            console.log(error)
        })
    }
        fetchData()
    },[])

    

        

    return ( 
   
        <div>
        <h1>{weather}</h1>
        
        </div>
     );
}
 
export default Tennesse;