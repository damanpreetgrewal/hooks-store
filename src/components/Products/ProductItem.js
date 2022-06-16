import React from 'react';
import { useStore } from '../../hooks-store/store';

import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = (props) => {
    const dispatch = useStore(false)[1];

    const toggleFavHandler = () => {
        dispatch('TOGGLE_FAV',props.id);
    };

    return(
        <Card style={{ marginBottom: '1rem'}}>
            <div className='product-detail'>
            <h2 className={props.isFav ? 'is-fav' : ''}></h2>
            <p>{props.description}</p>
            <button className={props.isFav ? 'button-outline' : ''}
            onClick={toggleFavHandler}>
                {props.isFav ? 'un-favorite' : 'favorite'}
            </button>
            </div>
        </Card>    
    );

};

export default ProductItem;