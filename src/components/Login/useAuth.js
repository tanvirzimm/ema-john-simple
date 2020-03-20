import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";
import { Route,Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const getUser = (user) => {
    const {displayName,email,photoURL} = user;
    return {name:displayName,email,photo:photoURL}
}

const AuthContext = createContext();
export const AuthContextProvider = (props) =>{
    const auth = Auth();
return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

//private router

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }



const Auth = () => {
    const [user,setUser] = useState(null);
    const SignInWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
           const signedUser = getUser(res.user);
            setUser(signedUser)
            
        })
        .catch(err => {
            setUser(null)
            console.log(err);
            return err.message;
            
        })
    }

    const SignOut = () => {
        return firebase.auth().signOut().then(function() {
            setUser(null);
            return true;
          }).catch(function(error) {
            return false;
          });
    }



      useEffect(()=>{
        
    firebase.auth().onAuthStateChanged(function(usr) {
        if (usr) {
                const currUser = getUser(usr);
                setUser(currUser);

        } else {
         
        }
      });

      },[])
    
  

    return {
        user,
        SignInWithGoogle,
        SignOut,
        
    }
}


export default Auth;