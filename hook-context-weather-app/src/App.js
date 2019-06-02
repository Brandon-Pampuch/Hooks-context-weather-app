import React from "react";
import axios from 'axios'
import Landing from "./pages/Landing";
import Tennesse from './pages/Tennesse';
import Alabama from './pages/Alabama';
import Minnesota from './pages/Minnesota'
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState, useEffect} from 'react'

import "./App.css";

export const StateContext = React.createContext("apple")

function App() {

  const [weather, setWeather]=useState()

  useEffect(() =>{
      const fetchData =  () =>{ 
      axios.get('http://api.openweathermap.org/data/2.5/weather?zip=37174,us&appid=c1b91878d87bd4516034e993aa14f682')
      .then((res)=>{
          const temp = res.data.main.temp
          let fahrenheit = Math.floor((temp -273) * (9/5) + 32);
          console.log(weather)
          setWeather(fahrenheit)
      }).catch((error)=>{
          console.log(error)
      })
  }
      fetchData()
  },[])



  return (
    <StateContext.Provider value={[weather, setWeather]}>
      <Router>
          <Route exact path={"/"} component={Landing}></Route>
          <Route exact path="/Tennesse" component={Tennesse}></Route>
          <Route exact path="/Minnesota" component={Minnesota}></Route>
          <Route exact path="/Alabama" component={Alabama}></Route>
      </Router>
    </StateContext.Provider>
  );
}

export default App;