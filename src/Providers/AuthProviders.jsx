import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
    const [darkLightTheme, setDarkLightTheme] = useState(false)


    useEffect(() => {
        fetch(`https://language-learning-school-server-alamin657.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setRole(data?.result.role))
    }, [user])



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                axios.post('https://language-learning-school-server-alamin657.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const googleProviderSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const toggleTheme = () => {
        setDarkLightTheme(!darkLightTheme)
    }

    const authInfo = {
        user,
        error,
        setError,
        loading,
        role,
        setRole,
        createUser,
        signIn,
        logOut,
        updateProfileUser,
        googleProviderSignIn,
        toggleTheme,
        darkLightTheme

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;