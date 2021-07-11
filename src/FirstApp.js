// Los componentes existen dos tipos por clases y por funciones.
import React, { Fragment } from 'react';

// Functional Components
const FisrtApp = (props) => {

    const grettings = 'Hola Mundo const';
    const objectPerson = {
        name: 'Demo',
        age: 123
    };

    return (
        <Fragment>
            <h1>{ props.saludo }</h1>
            <h1>{ grettings }</h1>
            {/* <pre>{ JSON.stringify(objectPerson, null, 3) }</pre> */}
            <h1>Hola Mundo</h1>
        </Fragment>
    );
}

export default FisrtApp;