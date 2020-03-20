import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
const {name,quantity,key,price} = props.product;
const reviewItemStyle = {
    borderBottom:'2px solid lightgray',
    paddingBottom:'5px',
    marginBottom:'5px',
    marginLeft:'200px'
}
    return (
        <div style={reviewItemStyle}>
            <h2 className='product-name'>{name}</h2>
    <p>Price : {price}</p>
            <p>quantity = {quantity}</p>
            <button 
                className='main-button'
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;