import React from 'react';
import Country from './Country';
import infinity from '../images/infinity.svg'

const Countries = ({countries, isLoading}) => {
    return isLoading ? (<div className = "countries loading">
        <img src={infinity} alt="Travelling the world.."/>
    </div>) : (
        <div className="countries container">
            {countries.map((country,index)=> {
                return <Country country={country} key={index}/>;
        })}
       </div>
    );
};
    

export default Countries;