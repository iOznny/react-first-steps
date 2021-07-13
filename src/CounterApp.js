import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Functional Componente
const CounterApp = ({ value }) => {

    // handAdd
    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            <button onClick={ handleAdd }>+1</button>
        </Fragment>
    );
}

// Validaciones de Props.
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;