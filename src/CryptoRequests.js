import axios from "axios";

const API_KEY = process.env.RAPID_API_KEY;
const BASE_URL = 'https://coinranking1.p.rapidapi.com/coins';

const crypto_api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": 'coinranking1.p.rapidapi.com',
    "x-rapidapi-key": API_KEY,
  },
});



export default crypto_api;
