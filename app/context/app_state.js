"use client";

import { onAuthStateChanged } from "firebase/auth";
import {createContext, useContext, useState} from "react";
import { auth } from "../firebase/firebaseSetup";

const AppContext = createContext({
    signedInUserId: null,
    userFirstName: null,
    signInUser: () => {},
    signUpUser: () => {},
    signOutUser: () => {},
});

export function AppWrapper({children}) {
    const [signedInUserId, setSignedInUserId] = useState(null);
    const [userFirstName, setUserFirstName] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedInUserId(user.uid);
            setUserFirstName(user.displayName);
        } else {
            setSignedInUserId(null);
            setUserFirstName(null);
        }
    });

    return (
        <AppContext.Provider value={{
            signedInUserId,
            userFirstName,
            setSignedInUserId,
            setUserFirstName,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(){ return useContext(AppContext); }