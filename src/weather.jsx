import { useState } from "react";
import axios from "axios";

function Weather() {

const [city,setcity] = useState("")
const [weather,setweather] = useState("")
const [temp,settemp]=useState("")
const [desc,setdesc] = useState("")


function handlecity(event){
    setcity(event.target.value)
}

function getweather(){
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fbf92ef5c759cabf546b1fb0566057c`)

    weatherdata.then(function(msg){
        console.log(msg.data)
        setweather(msg.data.weather[0].main)
        settemp(msg.data.main.temp)
        setdesc(msg.data.weather[0].description)
        
    })
}

  return (
    <div style={{padding: "5vw"}} className="h-screen flex flex-col justify-center bg-gradient-to-r from-fuchsia-100 to-purple-400">
      <div style={{ padding: "5vw" }} className="bg-gradient-to-r from-purple-400 to-purple-100 rounded-xl">
        <h1 className="text-[3.5vw] font-bold">Weather Report</h1>
        <p className="text-lg">I can give you Weather report about your city!</p>
        <div className="py-2 mt-[1vw]">
          <input
          onChange={handlecity}
          value={city}
          type="text"
            placeholder="Enter your City Name"
            className="py-[0.5vw] px-[2vw] rounded-md border-opacity-60 border-black border-2"
          ></input>
          <br></br>
          <button onClick={getweather} style={{backgroundColor:"black",color:"white"}} className="mt-[1vw] px-[1vw] py-[0.5vw] rounded-md text-sm">Get Report</button>
        </div>

        <div className="font-bold">
          <h2 className="pt-[1vw]">Weather : {weather}</h2>
          <h2 className="pt-[1vw]">Temperature : {temp}</h2>
          <h2 className="pt-[1vw]">Description : {desc}</h2>
        </div>
      </div>
    </div>
  );
}
export default Weather;
