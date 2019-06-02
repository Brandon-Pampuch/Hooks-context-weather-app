import React from 'react';
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import StateContext from '../App'



function Minnesota () {
    const [weather, setWeather] = useContext(StateContext)
    console.log("Minnesota:", weather)
 



    return ( 
        <div>
            <h1>ok</h1>
        </div>
     );
}
 
export default Minnesota;