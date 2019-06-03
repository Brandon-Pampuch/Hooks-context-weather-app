import React from 'react';
import { Link } from 'react-router-dom'

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