import React from 'react';
import PropTypes from 'prop-types';

//los parametros vienen en la variable props
const Location = ({city}) => (//Destructuring
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
);
    
Location.propsTypes = {
    city : PropTypes.string.isRequired,
}

export default Location;