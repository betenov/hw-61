import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {ApiPostAllCountry} from "../../types";
import './CountryList.css'
import CountryBlock from "../CountryBlock/CountryBlock";
import CountryInfo from "../CountryInfo/CountryInfo";

const URl = 'https://restcountries.com/v2/all?fields=alpha3Code,name';


const CountryList = () => {
  const [countries, setCountries] = useState<ApiPostAllCountry[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null)

  const fetchData = useCallback( async () =>{
    const countries1 = await  axios.get<ApiPostAllCountry[]> (URl);

    const promise = countries1.data.map(async country => {
      return {
        name:country.name,
        alpha3Code:country.alpha3Code
      }
    })
    const newCountry = await Promise.all(promise);
    setCountries(newCountry)
  },[])


  useEffect(() => {
    fetchData().catch(console.error)
  },[fetchData])

  return (
    <div> {countries.map(country => (
      <CountryBlock name={country.name} key={country.name} onClick={() =>setSelectedCountryId(country.alpha3Code)} />

    ))}
      <CountryInfo code={selectedCountryId}/>
    </div>

  );
};

export default CountryList;