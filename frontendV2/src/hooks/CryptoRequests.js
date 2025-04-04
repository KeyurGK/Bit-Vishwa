import axios from "axios";

const API_KEY = '4d100bb424mshaaaecf4bd1066f5p1b5cb0jsn7cc8632e6b51';

const BASE_URL = 'https://coinranking1.p.rapidapi.com/coins';

const crypto_api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": 'coinranking1.p.rapidapi.com',
    "x-rapidapi-key": API_KEY,
  },
});



export default crypto_api;
