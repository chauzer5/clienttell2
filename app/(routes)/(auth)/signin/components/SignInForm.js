"use client";

import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Snackbar, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseSetup";
import { useState } from "react";
import { useAppContext } from "@/app/context/app_state";

export default function SignInForm() {
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
            justifyContent: "space-between",
        }
    };

    const router = useRouter();
    const { notify } = useAppContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");
        const remember = formData.get("remember") != null;

        setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence).then(() => {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                router.push('/home');
            })
            .catch((error) => {
                let errorMessage;

                switch(error.code){
                    case "auth/invalid-email":
                    case "auth/user-not-found":
                        errorMessage = "No account matching that email";
                        break;
                    case "auth/wrong-password":
                        errorMessage = "Incorrect password";
                        break;
                    default:
                        errorMessage = error.code;
                }
                
                notify(errorMessage, "error");
            });
        })
        
    };

    return (
            <Container maxWidth="xs">
                <Box sx={styles.main}>
                    <Typography sx={styles.header}>
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        <FormControlLabel
                            control={<Checkbox name="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={styles.submit}
                        >
                            SIGN IN
                        </Button>
                        <Box sx={styles.bottom}>
                            <Link href="#" style={styles.link}>Forgot password?</Link>
                            <Link href="/signup" style={styles.link}>Don&apos;t have an account? Sign up</Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
    );
}