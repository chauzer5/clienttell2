"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { useAppContext } from "@/app/context/app_state";
import { auth } from "@/app/firebase/firebaseSetup";
import { Box } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: 'ClientTell',
//   description: 'Efficient sales call notes',
// };

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
    const { signedInUserId, setSignedInUserId, setUserFirstName } = useAppContext();

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

    // const router = useRouter()

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
        <Box sx={styles.root}>
            <SiteHeader />
            <Box sx={styles.content}>
                {children}
            </Box>
        </Box>
    );
}
