import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {key} = useParams();
   const product = fakeData.find(pd => pd.key === key)
    return (
        <div>
            <h1>Product details</h1>
            <Products products={product} addToCart={false}></Products>
        </div>
    );
};

export default ProductDetails;