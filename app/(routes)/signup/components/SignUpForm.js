"use client";

import { Alert, Box, Button, Container, Snackbar, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseSetup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpForm() {
    const styles = {
        main: {
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        header: {
            fontSize: 24,
        },
        form: {
            mt: 1,
        },
        submit: {
            mt: 3,
            mb: 2,
            backgroundColor: "#3D5C7E",
        },
        link: {
            fontSize: 14,
            color: "#6ea9e3",
        },
        submitLink: {
            textDecoration: "none",
        },
        bottom: {
            display: "flex",
            justifyContent: "flex-end",
        }
    };

    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");
    const [errorOpen, setErrorOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        const email = formData.get("email");
        const password = formData.get("password");
        const firstName = formData.get("name");

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            updateProfile(auth.currentUser, {displayName: firstName});
            router.push('/home');
        })
        .catch((error) => {
            switch(error.code){
                case "auth/email-already-in-use":
                    setErrorMessage("An account with that email already exists");
                    break;
                default:
                    setErrorMessage(error.code);
            }
            setErrorOpen(true);
        })
    }

    return (
        <>
            <Container maxWidth="xs">
                <Box sx={styles.main}>
                    <Typography sx={styles.header}>
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="First Name"
                            name="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={styles.submit}
                        >
                            SIGN UP
                        </Button>
                        <Box sx={styles.bottom}>
                            <Link href="/signin" style={styles.link}>Already have an account? Sign in</Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Snackbar open={errorOpen} autoHideDuration={6000} onClose={() => setErrorOpen(false)}>
                <Alert severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
}