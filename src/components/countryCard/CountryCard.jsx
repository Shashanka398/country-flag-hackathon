import React from 'react'
import style from './CountryCard.module.css'
const CountryCard = (props) => {

  return (
    <div className={style.card}>
       <img src={props.countryData.flags.png}  width={100} height={100} alt="country-flag"/>
       <div>{props.countryData.name.common}</div>
    </div>
  )
}

export default CountryCard