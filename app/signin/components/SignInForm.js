import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import Link from "next/link";

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

    return (
        <Container maxWidth="xs">
            <Box sx={styles.main}>
                <Typography sx={styles.header}>
                    Sign In
                </Typography>
                <Box component="form" sx={styles.form}>
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
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Link href="/home" style={styles.submitLink}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={styles.submit}
                        >
                            SIGN IN
                        </Button>
                    </Link>
                    <Box sx={styles.bottom}>
                        <Link href="#" style={styles.link}>Forgot password?</Link>
                        <Link href="/signup" style={styles.link}>Don't have an account? Sign up</Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}