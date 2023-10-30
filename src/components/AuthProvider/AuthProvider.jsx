import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";

import app from "../../../firebase/firebase.config";
export const  AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();

    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);

    const signup=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const signin=(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

      const googleLogin=()=>{
        return signInWithPopup(auth,provider);
      }

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log('observing the current user',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe()
        }
      },[])
    const authInfo={
        user,
        loading,
        signup,
        signin,
        logOut,
        googleLogin


    }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;

