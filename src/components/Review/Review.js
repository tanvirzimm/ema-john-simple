import React,{useState, useEffect} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happy from '../../images/giphy.gif';

const Review = () => {
    
    const [cart,setCart] = useState([]);
    const [placeOrder,setPlaceOrder] = useState(false);
console.log(placeOrder);

    const handlePlaceOrder = ()=>{
            setCart([]);
            setPlaceOrder(true);
            processOrder();
    }

    const removeProduct = (productKey) =>{

            const newCart = cart.filter(pd => pd.key !== productKey)
            setCart(newCart);
            removeFromDatabaseCart(productKey);

    }
    
   useEffect(() => {
     
    const savedCart = getDatabaseCart();
    const productKey = Object.keys(savedCart);
   const products  = productKey.map(key => {
       const product = fakeData.find(pd => pd.key === key)
       product.quantity =savedCart[key];
       return product;
    });
    setCart(products);
   },[])
    let thankyou;
   if(placeOrder){
       thankyou = <img src={happy}></img>
   }
    return (
        <div className='shop-container'>
           <div className="product-container">
           <h1>Review page</h1>
            {
                cart.map(pd => <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
            }
            {
                thankyou
            }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                   <button onClick={handlePlaceOrder} className='main-button'>Place order</button>
               </Cart>
           </div>
        </div>
    );
};

export default Review;