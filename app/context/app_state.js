"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({
    signedInUserId: null,
    setSignedInUserId: () => {},
});

export function AppWrapper({children}) {
    const [signedInUserId, setSignedInUserId] = useState(null);
    return (
        <AppContext.Provider value={{
            signedInUserId,
            setSignedInUserId,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(){ return useContext(AppContext); }