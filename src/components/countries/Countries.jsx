import React, { useEffect, useState } from 'react';
import CountryCard from '../countryCard/CountryCard';
import style from "./Contries.module.css"
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountriesData();
      setCountries(countriesData);
    };

    fetchData();
  }, []);

  console.log(countries);

  return (
    <div className={style.countries}>
        {
            countries.length>0?(
                
                    countries.map((country,index)=>(
                        <CountryCard countryData={country} />
                       ))
       
                
            ):(
                <div>Loading..</div>
            )
           
        }
    
    </div>
  );
};

export default Countries;
