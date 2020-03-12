import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {

    const { name, img, price, seller, stock } = props.products;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=> props.handleAddProduct(props.products)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Products;