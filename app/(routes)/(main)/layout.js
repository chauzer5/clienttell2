"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Box } from "@mui/material";

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
    return (
        <Box sx={styles.root}>
            <SiteHeader />
            <Box sx={styles.content}>
                {children}
            </Box>
        </Box>
    );
}
