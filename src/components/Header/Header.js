import React, {useRef, useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';


// const usePrevious = (value) =>{
//     const prev = useRef();

//     useEffect(()=>{
//             prev.current = value;
//     },[value])

//     return prev.current;
// }
const Header = () => {
   
    // const [count,setCount] = useState(0);
    // const previous = usePrevious(count);
    const auth = useAuth();
    console.log(auth.user);
    console.log(auth.user && auth.user.name);
    
    
    
   
    
    
    return (
        <div className='header'>
            <img src={logo} alt=""/>
                {/* <h1>Count:{count} Prev : {previous}</h1>
                <button onClick={()=>setCount(count+1)}>+</button>
                <button onClick={()=>setCount(count-1)}>-</button> */}
            <nav>
                <Link to="/shop">Shop</Link>        
                <Link to="/review">review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
                {
                    auth.user && <span style={{color:'yellow'}}>{ auth.user.name}</span>
                    
                }
                {
                     auth.user ? <a href="/login">Sign Out</a>:
                    <a href="/login">Sign in</a>
                }
                
            </nav>
        </div>
    );
};

export default Header;