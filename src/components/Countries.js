import React from 'react';
import Country from './Country';

const Countries = ({countries}) => {
    return(
        <div>
            {countries.map((country, index) 
            => (
                <div key={index}>
                    <Country
                     country={country}
              />
        </div>
     ))}

        </div>)}

export default Countries;z