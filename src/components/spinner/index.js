import React from 'react';
import './spinner.scss';

function Spinner (p) {
    return (
        <div className='spinner'>
            <div className='spinner__bounce'></div>
            <div className='spinner__bounce'></div>
            <div className='spinner__bounce'></div>
        </div>
    );
}

export default Spinner;
