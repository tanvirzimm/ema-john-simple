import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);
            const previousCart = productKeys.map(existingKey =>{
                const product = fakeData.find(pd => pd.key === existingKey);
                product.quantity = savedCart[existingKey];
                return product;
            })
            setCart(previousCart);
    },[])

    const handleAddProduct= (product) => {

        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others,sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product]
        }


        setCart(newCart);
        addToDatabaseCart(product.key,count);

    //     const newCart = [...cart,product];
    //     const sameProduct = newCart.filter(pd => pd.key === product.key);
    //     const count = sameProduct.length;
    //     product.quantity = count;
    //    setCart(newCart)
      
    //     addToDatabaseCart(product.key,count);
    };
    return (

        <div className='shop-container'>
            <div className="product-container">
                {products.map(pd => <Products 
                key={pd.key}
                handleAddProduct={handleAddProduct}
                products={pd}
                addToCart={true}>
                </Products>)}
            </div>

            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to='/review'><button className='main-button'>Review button</button></Link>
               </Cart>
            </div>
        </div>
    
    );
};

export default Shop;