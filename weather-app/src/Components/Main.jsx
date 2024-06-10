import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { Search } from "./Search";

export const Main=()=>{
const [weather,setWeather]=useState({}); //storing api results
const [date,setDate]=useState("");

useEffect(()=>{
    AOS.init({duration:2000});
},[])

useEffect(()=>{

axios.get("https://api.openweathermap.org/data/2.5/weather?lat=28.61&lon=77.20&appid=7be3a0ea12836c17954d25cb474c2996")
.then((res)=>{
setWeather(res.data);
var currentdate = new Date();
var datetime = "Last Sync Time: " 
//+ currentdate.getDay() + "/" + currentdate.getMonth() 
//+ "/" + currentdate.getFullYear() + " "
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
setDate(datetime);
}).catch((err)=>{
    console.log(err);
})// handling the api call for weather with useeffect

},[])

const handleClick = () => {
    // Scroll to the bottom of the page on image click
    window.scrollTo(0,400);
  }


console.log(weather);
    return <div className="land">

<div className="desc">
<h1> Weather Check</h1>

<p>You can check the weather of anywhere. You can also get different types of details about the weather of any location
 like wind speed, humidity temperature etc.
</p>

{weather.main===undefined?<div className="error">
  Something went wrong. Cannot get current weather.
</div>:
<div data-aos="new-animation" className="DefaultLocation">
<h3>{weather.name}</h3>
 <h3> {weather.weather[0].main}</h3>
<h4>Temperature {(weather.main.temp-273.15).toFixed(2)}</h4>
<h4>{date}</h4>
</div>}

<h2>Scroll down to search for other locations </h2>
<img src="https://cdn-icons-png.freepik.com/512/318/318479.png" alt="error" onClick={handleClick} />
</div>

<Search/>
    </div>
}