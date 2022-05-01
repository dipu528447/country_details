
import './App.css';
import Home from './component/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountryDetails from './component/countryDetails/CountryDetails';
function App() {
  const [countries,setcountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setcountries(data))
    
}) 
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home countries={countries}/>}/>
          <Route exact path="/countryDetails/:countryKey" element={<CountryDetails data={countries}/>} />
      </Routes>
    </div>
  );
}

export default App;
