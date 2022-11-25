import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {ApiPostAllCountry} from "../../types";
import './CountryList.css'
import CountryBlock from "../CountryBlock/CountryBlock";

const URl = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

const CountryList = () => {
  const [countries, setCountries] = useState<ApiPostAllCountry[]>([]);
  const [selectedIdCountryId, setSelectedCounrtyId] = useState<string | null>(null)

  const fetchData = useCallback( async () =>{
    const countries1 = await  axios.get<ApiPostAllCountry[]> (URl);

    const promise = countries1.data.map(async country => {
      const countriesFromApi = await axios.get<ApiPostAllCountry[]>;
      return {
        name:country.name,
        alphaCode:country.alphaCode
      }
    })

    const newCountry = await Promise.all(promise);
    setCountries(newCountry)



  },[])
useEffect(() =>{
  fetchData().catch(console.error)

},[fetchData])

  useEffect(() => {
    console.log('Country =' ,selectedIdCountryId)
  },[selectedIdCountryId])

  const onClick = (index:number) =>{
    console.log('Click')
  }
  return (
    <div> {countries.map(country => (
      <CountryBlock name={country.name} key={country.name} onClick={() =>setSelectedCounrtyId(country.name)}/>
    ))} </div>
  );
};

export default CountryList;