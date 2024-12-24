/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import useAxiosSecure from "../Components/hooks/UseAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const axiosSecure = useAxiosSecure();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const updateUserProfile = (name, image) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const googleProvider = new GoogleAuthProvider
    const signWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userSignOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        registerNewUser,
        signInUser,
        updateUserProfile,
        signWithGoogle,
        userSignOut
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email: currentUser?.email};
                axiosSecure.post('/jwt', user);
                setLoading(false);
            }else{
                axiosSecure.post('/logout', {})
                setLoading(false);
            } 
        });
        return ()=>{
            unsubscribe()
        };
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;