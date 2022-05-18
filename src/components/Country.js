import React from 'react'

const Country = ({ country }) => {
  console.log(country);
  return (<div className="country">
    <div className ="country-image"></div>
      <img src={country.flags.png} alt={country.name.common}/>
    <div className="country-info">
      <h1>{country.name.commmon}</h1>
      <ul>
        <li>
          <span className= "name">{country.name.common}</span>
        </li>
        <li>
          <span>Capital: {country.capital}</span>
        </li>
        <li>
          <span>Region: {country.region}</span>
        </li>
        <li>
          <span>Population: {country.population}</span>
        </li>
      </ul>
    </div>
</div>)
};

export default Country;