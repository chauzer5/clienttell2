"use client";

import { onAuthStateChanged } from "firebase/auth";
import {createContext, useContext, useState} from "react";
import { auth } from "../firebase/firebaseSetup";
import { useRouter } from "next/navigation";

const AppContext = createContext({
    signedInUserId: null,
    userFirstName: null,
    setSignedInUserId: () => {},
    setUserFirstName: () => {},
});

export function AppWrapper({children}) {
    const [signedInUserId, setSignedInUserId] = useState(null);
    const [userFirstName, setUserFirstName] = useState(null);
    const router = useRouter()

    // onAuthStateChanged(auth, (user) => {
    //     if (user && !signedInUserId) {
    //         setSignedInUserId(user.uid);
    //         setUserFirstName(user.displayName);
    //         router.push('/home');
    //     } else if (!user && signedInUserId){
    //         setSignedInUserId(null);
    //         setUserFirstName(null);
    //         router.push('/signin');
    //     }
    // });

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