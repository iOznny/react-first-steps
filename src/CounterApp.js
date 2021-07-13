import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Functional Componente
const CounterApp = ({ value }) => {
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
        </Fragment>
    );
}

// Validaciones de Props.
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;