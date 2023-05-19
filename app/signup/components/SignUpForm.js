import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";

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

    return (
        <Container maxWidth="xs">
            <Box sx={styles.main}>
                <Typography sx={styles.header}>
                    Sign Up
                </Typography>
                <Box component="form" sx={styles.form}>
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
                    <Link href="/home" style={styles.submitLink}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={styles.submit}
                        >
                            SIGN UP
                        </Button>
                    </Link>
                    <Box sx={styles.bottom}>
                        <Link href="/signin" style={styles.link}>Already have an account? Sign in</Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}