import React from 'react';
import ReactDOM from 'react-dom';
import FisrtApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#root');
ReactDOM.render(<FisrtApp saludo="PropSaludo" />, divRoot);
