"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({
    signedInUserId: null,
    userFirstName: null,
    currentNotification: false,
    notificationMessage: "",
    notificationSeverity: "",
    setSignedInUserId: () => {},
    setUserFirstName: () => {},
    notify: () => {},
    closeNotify: () => {},
});

export function AppWrapper({children}) {
    const [signedInUserId, setSignedInUserId] = useState(null);
    const [userFirstName, setUserFirstName] = useState(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationSeverity, setNotificationSeverity] = useState("");

    const notify = (message, severity) => {
        setNotificationMessage(message);
        setNotificationSeverity(severity);
        setNotificationOpen(true);
    };

    const closeNotify = () => {
        setNotificationOpen(false);
    };

    return (
        <AppContext.Provider value={{
            signedInUserId,
            userFirstName,
            notificationOpen,
            notificationMessage,
            notificationSeverity,
            setSignedInUserId,
            setUserFirstName,
            notify,
            closeNotify,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(){ return useContext(AppContext); }