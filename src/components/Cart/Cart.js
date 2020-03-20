import React from 'react';


const Cart = (props) => {

const totalPrice = props.cart.reduce((total,pd) => total+pd.price*pd.quantity,0);

const tax = totalPrice /10;
let ship = 0;
if(totalPrice>35){
    ship=0;
}
else if(totalPrice>10){
    ship=4;
}
else if(totalPrice>0){
  ship=12;
}
function getNumber(num){
    return Number(num.toFixed(2))
}
    return (
        <div>
            <h4>Total items : {props.cart.length}</h4>
            <h4>All products price : {getNumber(totalPrice)}</h4>
            <h4>Tax + Vat :{getNumber(tax)}</h4>
    <h4>Shipping cost : {ship}</h4>
    <h4>Grand  total : {getNumber(totalPrice+ship+tax)}</h4>
    {
        props.children
    }
        </div>
    );
};

export default Cart;