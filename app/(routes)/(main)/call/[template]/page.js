"use client";

import { Box } from "@mui/material";
import CallTreeSection from "./components/CallTreeSection";
import CallOutputSection from "./components/CallOutputSection";

export default function CallApplication(){
    const styles = {
        main: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
        },
        callTree: {
            width: "50%",
            backgroundColor: "#E1E1E1",
            overflow: "auto",
            height: "100%",
        },
        callOutput: {
            width: "50%",
            backgroundColor: "whitesmoke",
            height: "100%",
        }
    };

    return (
        <Box sx={styles.main}>
            <Box sx={styles.callTree}>
                <CallTreeSection />
            </Box>
            <Box sx={styles.callOutput}>
                <CallOutputSection />
            </Box>
        </Box>
    );
}