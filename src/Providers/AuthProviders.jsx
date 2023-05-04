import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updatedInfo = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, photoURL: `${photo}`
        })
        .then(()=>{
            console.log('succes')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('loged in user', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        login,
        updatedInfo,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}    
        </AuthContext.Provider>
    );
};

export default AuthProviders;