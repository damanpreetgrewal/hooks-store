import React from 'react';

import useStore from '../hooks-store/store';
import './Product.css';

const products = (props) => {
    const state = useStore()[0];

    return(
        <ul className="products-list">
            
        </ul>
    );

};

export default products;