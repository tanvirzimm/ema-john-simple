import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";


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

const Auth = () => {
    const [user,setUser] = useState(null);
    const SignInWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
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
        firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            
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