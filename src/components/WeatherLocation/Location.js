import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// const Location = () => (
//     <div><h1>Madrid</h1></div>
// );

// const Location = ({ city }) => {

//     /*Herramientas de debbuging */
//     // console.log(props);
//     // debugger;
    
//     // Destructuring
//     //const city = props.city;
//     //const { city } = props;

//     return (
//         <div><h1>{city}</h1></div>)
// };

 // En una linea
const Location = ({ city }) => (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
);

Location.propTypes = {

    city: PropTypes.string.isRequired,
}

export default Location;