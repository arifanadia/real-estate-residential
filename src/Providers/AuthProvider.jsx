import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    updateProfile,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";


import app from "../Firebase/Firebase.config";

import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const logOut = () => {
        setLoading(true);
        setUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the onStatechange", currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe()

        }


    }, [])
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const authInfo = { user, createUser, logIn, googleLogIn, githubLogin, logOut, updateUserProfile, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired

};

export default AuthProvider;