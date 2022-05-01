import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    let details=props.details;
    const imageStyle={"width":"90%", "height":"90%", "margin":"1px"}
    // console.log(details.cca2);
    return (
        <div className='col-md-1 border border-success mx-3 my-2 rounded thumbnail'>
            <Link to={`/countryDetails/${details.cca2}`}>
                <img style={imageStyle} src={details.flags.png} alt="not found"/>
            </Link>
        </div>
    );
};

export default Country;