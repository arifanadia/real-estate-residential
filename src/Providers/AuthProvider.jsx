import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";

import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the onStatechange", currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe()

        }

    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = { user, createUser,logIn,googleLogIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object.isRequired
    
};

export default AuthProvider;