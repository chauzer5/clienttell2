"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({
    signedInUserId: null,
    userFirstName: null,
    setSignedInUserId: () => {},
    setUserFirstName: () => {},
});

export function AppWrapper({children}) {
    const [signedInUserId, setSignedInUserId] = useState(null);
    const [userFirstName, setUserFirstName] = useState(null);

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