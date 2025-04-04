// import axios from 'axios'
import React, { useState,useEffect } from 'react'
// import requests from '../CryptoRequests';
// import crypto_api from '../CryptoRequests';
// import exchRate_api from '../ExchRate';

const Home = () => {
    const [coins,setCoins]=useState([])
    const [exchangeRate, setExchangeRate] = useState(null);     
    const [price,setPrice]=useState(null)  

  

    // useEffect(() => {
    //   crypto_api
    //     .get("https://coinranking1.p.rapidapi.com/coins")
    //     .then((response) => {
    //       setCoins((response.data.data.coins).slice(0,10));
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);

    // useEffect(() => {
    //   exchRate_api
    //     .get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency')
    //     .then((response) => {
    //       setExchangeRate(response.data.new_amount);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);

    const convertDollartoRupees =(dollar)=>{
      const result = dollar * exchangeRate;
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(result.toFixed(2))
    }
    
    
    return (
    
    <div class="container mx-auto py-8 px-8">
  <table class="table-auto w-full ">
    <thead>
      <tr>
        <th class="px-4 py-2 border border-white border-10 bg-purple-500 text-white">Rank</th>
        <th class="px-4 py-2 border border-white border-10 bg-purple-500 text-white">Logo</th>
        <th class="px-4 py-2 border border-white border-10 bg-purple-500 text-white">Name</th>
        <th class="px-4 py-2 border border-white border-10 bg-purple-500 text-white">Shorthand</th>
        <th class="px-4 py-2 border border-white border-10 bg-purple-500 text-white">Price</th>
      </tr>
    </thead>
    <tbody>
    {coins.map((item)=>(
      <tr class="bg-white">
        <td class="border border-purple-500 border-5 px-4 py-2 text-center">{item.rank}</td>
        <td class="border border-purple-500 border-5 px-4 py-2  "> <img className='h-8 w-8 mx-[40%]'src={item.iconUrl}/></td>
        <td class="border border-purple-500 border-5 px-4 py-2 text-center">{item.name}</td>
        <td class="border border-purple-500 border-5 px-4 py-2 text-center">{item.symbol}</td>
        <td class="border border-purple-500 border-5 px-4 py-2 text-center">{convertDollartoRupees(item.price)}</td>
      </tr>
    ))}
    </tbody>
  </table>
  </div>
);
}

export default Home