import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries,setCountries]= useState([]);
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Total Countries: {countries.length}</h1>
        {console.log(countries)}
        
        <ul>
          {countries.map(country=> <Country country={country} key={country.alpha2Code}></Country> )}
        </ul>
       
      </header>
    </div>
  );
}

export default App;
