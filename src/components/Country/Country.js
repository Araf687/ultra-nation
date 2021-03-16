import React from 'react';
import './Country.css';

const Country = (props) => {

    const {name,capital,region,subregion,flag,population} = props.country;
    
    return (
        <div className="country" >
            <div className='img'>
                <img src={flag} alt=""/>
                <h2>{name}</h2>

            </div>
            <div className='description'>
                
                <h3>region: {region}</h3>
                <h3>subregion: {subregion}</h3>
                <h4>capital: {capital}</h4>
                <h4>population: {population}</h4>
            </div>


        </div>
    );
};

export default Country;