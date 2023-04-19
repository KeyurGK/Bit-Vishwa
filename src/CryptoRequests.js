import axios from "axios";


const BASE_URL = 'https://coinranking1.p.rapidapi.com/coins';

const crypto_api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": 'coinranking1.p.rapidapi.com',
    "x-rapidapi-key": process.env.CRYPTO_API_KEY,
  },
});



export default crypto_api;
