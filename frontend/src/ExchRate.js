import axios from "axios";

const API_KEY = '4d100bb424mshaaaecf4bd1066f5p1b5cb0jsn7cc8632e6b51';
const BASE_URL = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency';

const exchRate_api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": 'currency-converter-by-api-ninjas.p.rapidapi.com',
    "x-rapidapi-key": API_KEY,
  },
  params: {have: 'USD', want: 'INR', amount: '1'},
});



export default exchRate_api;
