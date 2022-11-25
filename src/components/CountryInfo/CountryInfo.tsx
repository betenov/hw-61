import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {ApiPostAllCountry} from "../../types";
interface Props{
  code:string | null
}

const URL_COUNTRY = 'https://restcountries.com/v2/alpha/';

const CountryInfo:React.FC<Props> = ({code}) => {
  const [country, setCountry] =useState<ApiPostAllCountry | null>(null);

  const fetchPost = useCallback( async () => {

      const countryResponse = await axios.get(URL_COUNTRY + code);
      setCountry(countryResponse.data)

  },[code])

  useEffect(() =>{
    fetchPost()
   console.log('Code = ' , code)
  },[code,fetchPost])
  return country &&  (
    <div>
      <h1>{country.name}</h1>
      <div>
        <strong>Capital of country</strong>
      </div>
    </div>
  );
};

export default CountryInfo;