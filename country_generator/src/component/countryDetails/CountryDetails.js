import React from 'react';
import { useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const CountryDetails = (props) => {
    const {countryKey} = useParams();
    const countries = props.data;
    const imageStyle={"width":"50%", "height":"50%", "margin":"10px"}
    const country = countries.find(con => con.cca2 === countryKey)
    const history = useNavigate();
    console.log(country)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='fs-3'>Country Name: {country.altSpellings[1]} ({country.altSpellings[2]}-{country.altSpellings[0]})</p>
                    <p className='fs-5'>area: {country.area}</p>
                    <p className='fs-5'>Capital: {country.capital.map(item=>item)}</p>
                    <p className='fs-5'>Currency: {Object.keys(country.currencies)}</p>
                    <p className='fs-5'>Languages: {Object.values(country.languages)}</p>
                </div>
                <div className='col-md-6'>
                    <div><img className='rounded border border-warning p-2 m-2' style={imageStyle} src={country.coatOfArms.png} alt="not found"/></div>
                    <div><img className='rounded border border-info p-2 m-2' style={imageStyle} src={country.flags.png} alt="not found"/></div>
                </div>
            </div>
            <div className='row'>
                <button className='btn btn-danger' onClick={()=>{history("/")}}>Back</button>
            </div>
        </div>
    );
};

export default CountryDetails;