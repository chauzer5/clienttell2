"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { useAppContext } from "@/app/context/app_state";
import { auth } from "@/app/firebase/firebaseSetup";
import { Alert, Box, Snackbar } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function MainLayout({ children }) {
    const styles = {
        root: {
            background: "whitesmoke",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
        },
        content: {
            flexGrow: 1,
        },
    };

    const router = useRouter();
    const { 
        signedInUserId,
        setSignedInUserId,
        setUserFirstName,
        notificationOpen,
        notificationMessage,
        notificationSeverity,
        closeNotify,
    } = useAppContext();

    onAuthStateChanged(auth, (user) => {
        if(user && !signedInUserId){
            setSignedInUserId(user.uid);
            setUserFirstName(user.displayName);
        }
        else if(!user && signedInUserId){
            setSignedInUserId(null);
            setUserFirstName(null);
            router.push('/signin');
        }
    });

    return (
        <>
            <Box sx={styles.root}>
                <SiteHeader />
                <Box sx={styles.content}>
                    {children}
                </Box>
            </Box>

            <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={closeNotify}>
                <Alert severity={notificationSeverity}>
                    {notificationMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
