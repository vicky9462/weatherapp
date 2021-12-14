import React, { useEffect, useState } from "react";
const Tempapp=()=>{
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState('');
    useEffect(()=>{
        const fetchAPI= async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5cf05665786b08f08722477b5e7da21b `;
            const res = await fetch(url);
            const resJSON = await  res.json();
            setCity(resJSON.main);
            console.log(resJSON.main);
        }
         fetchAPI();
        
    },[search])

    return(
        <>
<div className="box">
    <div className="inputData">
        <input type="search" value={search}
        onChange={(e)=>{
            setSearch(e.target.value);

        }} className="inputField"/>
    </div>
    {!city ? (
    <p>No Data Found</p>):
    (
        <div>
        <div className="info">
        <h2 className="location">
        <i className="fas fa-street-view"></i>
        {search}
        </h2>
        <h1 className="temp">
            {city.temp}°cel
        </h1>
        <h3 className="temp_max">Min : {city.temp_min}°cel ! Max :{city.temp_max}°cel</h3>
        </div>
    </div>
    )}
    
</div>
    </>)
};
export default Tempapp;