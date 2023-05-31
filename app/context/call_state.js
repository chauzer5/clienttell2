"use client";

import {createContext, useContext, useState} from "react";

const CallContext = createContext();

export function CallWrapper({children}) {
    const [callInfo, setCallInfo] = useState(null);
    const [currentTemplate, setCurrentTemplate] = useState(null);
    const [folderPath, setFolderPath] = useState([]);
    const [currentPromptEdit, setCurrentPromptEdit] = useState(null);
    const [prompts, setPrompts] = useState([]);

    return (
        <CallContext.Provider value={{
            callInfo,
            currentTemplate,
            folderPath,
            currentPromptEdit,
            prompts,
            setCallInfo,
            setCurrentTemplate,
            setFolderPath,
            setCurrentPromptEdit,
            setPrompts,
        }}>
            {children}
        </CallContext.Provider>
    );
}

export function useCallContext(){ return useContext(CallContext); }