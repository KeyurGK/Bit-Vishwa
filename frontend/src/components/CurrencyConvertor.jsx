import React, { useEffect, useState } from 'react'

const CurrencyConvertor = () => {

    function CurrencyConverter() {
        
    const [exchangeRate, setExchangeRate] = useState(null);       
    

    useEffect(() => {
        const fetchExchangeRate = async () => {
          const response = await fetch( 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency');
          const data = await response.json();
          setExchangeRate(data.rate);
        }    
        fetchExchangeRate();
      }, []);
    }
  return (
    <div>

    </div>
  )
}

export default CurrencyConvertor