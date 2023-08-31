import React, { useState } from 'react';

const NavigationsProduct = ({ activeCountry, onCountryClick }) => {
    return (
        <div className="navigations">
            <h1 className="reproduct">Репродукции</h1>
            <ul className="product_ul">
                <li className={`product_li ${activeCountry === 'Франция' ? 'active' : ''}`}
                    onClick={() => onCountryClick('Франция')}>Франция</li>
                <li className={`product_li ${activeCountry === 'Германия' ? 'active' : ''}`}
                    onClick={() => onCountryClick('Германия')}>Германия</li>
                <li className={`product_li ${activeCountry === 'Англия' ? 'active' : ''}`}
                    onClick={() => onCountryClick('Англия')}>Англия</li>
            </ul>
        </div>
    );
};

export default NavigationsProduct;
