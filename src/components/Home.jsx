import axios from 'axios'
import React, { useState,useEffect } from 'react'
import requests from '../Requests';
import api from "../Requests";

const Home = () => {
    const [coins,setCoins]=useState([])
    
  

    useEffect(() => {
      api
        .get("https://coinranking1.p.rapidapi.com/coins")
        .then((response) => {
          setCoins(response.data.data.coins);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    console.log(coins)
    return (
    <div>
    {coins.map((item)=>(
      <p className='text-white'>{item.name}</p>
    ))}
  </div>
);
}

export default Home