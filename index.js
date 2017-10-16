import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RateCalculator from './components/rate-calculator';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<RateCalculator />, document.getElementById('root'))
);