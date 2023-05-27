'use client';

import { Card, CardContent, Box } from "@mui/material";
import ClientTellLogo from "../../../components/ClientTellLogo";
import SignInForm from "./components/SignInForm";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/app_state";
import { auth } from "@/app/firebase/firebaseSetup";

export default function SignIn() {
    const styles = {
        root: {
            background: "whitesmoke",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },

        card: {
            width: "500px",
            height: "550px",
            px: 2
        }
    }
    const router = useRouter();
    const { setSignedInUserId, setUserFirstName, signedInUserId } = useAppContext();

    onAuthStateChanged(auth, (user) => {
        if (user && !signedInUserId) {
            setSignedInUserId(user.uid);
            setUserFirstName(user.displayName);
            router.push('/home');
        }
    });

    return (
        <Box sx={styles.root}>
            <Card sx={styles.card}>
                <CardContent>
                    <ClientTellLogo />
                    <SignInForm />
                </CardContent>
            </Card>
        </Box>
    );
}
