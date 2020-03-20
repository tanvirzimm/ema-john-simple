import React from 'react';
import { useAuth } from './useAuth';

const Login = () => {
    
     const auth = useAuth();
     const handleSignIn = () => {
        auth.SignInWithGoogle()
        .then(res => {
            window.location.pathname = '/review'
        })
     } 

     const handleSignOut = () => {
        auth.SignOut()
        .then(res => {
            window.location.pathname = '/';
        })
     }



    return (
        <div>
            <h1>Hello from login page {}</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sign Out</button>:
                <button onClick={handleSignIn}>Sign In</button>
            }

           
            
        </div>
    );
};

export default Login;