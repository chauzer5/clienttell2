"use client";

import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useAppContext } from "@/app/context/app_state";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseSetup";

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

    const { setSignedInUserId, setUserFirstName } = useAppContext();
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");
        const remember = formData.get("remember") != null;

        signInWithEmailAndPassword(auth, email, password).then((result) => {
            console.log("SIGNED IN");
            console.log(result);
            setSignedInUserId(result.user.uid);
            setUserFirstName(result.user.displayName);
            router.push('/home');
        });

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