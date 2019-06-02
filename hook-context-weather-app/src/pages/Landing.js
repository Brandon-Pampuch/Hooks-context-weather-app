import React from 'react';
import axios from 'axios'
import { useState, useEffect} from 'react'
import { Route, Link } from 'react-router-dom'
import Tennesse from './Tennesse';
import Minnesota from './Minnesota';
//context 

//provider component

function Landing () {
   

 

return (
  
 
    <div>
       
        <h1>Weather App for Mom!</h1>
        <button><Link to={"/Tennesse"}>SpringHill</Link></button>
        <button><Link to={"/Minnesota"}>Canton</Link></button>
        <button><Link to={"/Alabama"}>Hueytown</Link></button>
        <button><Link to={"/"}>Home</Link></button>
    </div>
 
     );
}
 
export default Landing;