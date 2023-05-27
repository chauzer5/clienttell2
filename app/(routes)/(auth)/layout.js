"use client";

import { useAppContext } from "@/app/context/app_state";
import { Alert, Snackbar } from "@mui/material";

export default function AuthLayout({ children }) {
    const { notificationOpen, notificationMessage, notificationSeverity, closeNotify } = useAppContext();

    return (
        <>
            {children}

            <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={closeNotify}>
                <Alert severity={notificationSeverity}>
                    {notificationMessage}
                </Alert>
            </Snackbar>
        </>
    );
}