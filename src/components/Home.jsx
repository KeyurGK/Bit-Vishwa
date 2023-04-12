import axios from 'axios'
import React, { useState,useEffect } from 'react'
import requests from '../Requests'

const Home = () => {
    const [coins,setCoins]=useState([])
    
  

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '4d100bb424mshaaaecf4bd1066f5p1b5cb0jsn7cc8632e6b51',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};


      
      
    useEffect(()=>{
        axios.request(options).then(function (response) {
            setCoins(response.data.coins);
        }).catch(function (error) {
            console.error(error);
        });
      },[])
      
      console.log(coins)
  return (
    <div>

    </div>
  )
}

export default Home