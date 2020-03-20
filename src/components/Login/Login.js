import React from 'react';
import { useAuth } from './useAuth';

const Login = () => {
    
     const auth = useAuth();
    
    return (
        <div>
            <h1>Hello from login page {}</h1>
            {
                auth.user ? <button onClick={auth.SignOut}>Sign Out</button>:
                <button onClick={auth.SignInWithGoogle}>Sign In</button>
            }

           
            
        </div>
    );
};

export default Login;