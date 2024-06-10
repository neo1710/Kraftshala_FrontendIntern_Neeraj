import axios from "axios";
import { useState } from "react"





export const Search=()=>{
const [input,setInput]=useState("");
const [location,setLocation]=useState([])
const [weath,setWeath]=useState({});
const [date,setDate]=useState("");

function handleSearch(){
  axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=7be3a0ea12836c17954d25cb474c2996`).then((res)=>{   
    setLocation(res.data);
  
  }).catch((err)=>{
    console.log(err);
  })  
}

function handleWeath(ele){
    setWeath(ele);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${(ele.lat).toFixed(2)}&lon=${(ele.lon).toFixed(2)}&appid=7be3a0ea12836c17954d25cb474c2996`)
.then((res)=>{
setWeath(res.data);
var currentdate = new Date();
var datetime = "Last Sync Time: " 
//+ currentdate.getDay() + "/" + currentdate.getMonth() 
//+ "/" + currentdate.getFullYear() + " "
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
setDate(datetime);
}).catch((err)=>{
    console.log(err);
})// handling the api call for weather with
}

console.log(location);

console.log("weather"+" ", weath)
  return <div className="search">
<h2>Search For your location here</h2>
<input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="Search for location"/>
<button onClick={handleSearch}>Search</button>

<div className="results">
   {location.length===0?<h1>No Results Found</h1>:
   <div className="sr">
    {location.map((ele)=>(
        <div>

            <h3>{ele.name}</h3>
            <h4>Country {ele.country} </h4>  {/*location search results here*/}
            <button onClick={(e)=>{handleWeath(ele)}}>Show Details</button>
        </div>
    ))}
    </div>}
    <div className="fr">
       <h4>Click on any search results to get weather details </h4>
       
       {weath.main===undefined?<div className="error">
  Something went wrong. Cannot get current weather.
</div>:
<div style={{width:"80%"}} data-aos="new-animation" className="DefaultLocation">
<h3>{weath.name}</h3>
 <h3> {weath.weather[0].main}</h3>
<h4>Temperature {(weath.main.temp-273.15).toFixed(2)}</h4>
<h4>Wind Speed {weath.wind.speed}, Humidity {weath.main.humidity}</h4>
<h4>{date}</h4>
</div>}
        {/*final weather results here*/}
    </div>
</div>
  </div>
}