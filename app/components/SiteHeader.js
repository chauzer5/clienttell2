"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import ClientTellLogo from "./ClientTellLogo";
import UserThreeDotMenu from "./UserThreeDotMenu";

export default function SiteHeader(){
    const styles = {
        root: {
            background: "#3D5C7E",
            width: "100%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        logo: {
            color: "white",
            fontSize: 24,
            mx: 2,
        }
    };

    return (
        <Box sx={styles.root}>
            <Link href="/home"><ClientTellLogo style={styles.logo} /></Link>
            <UserThreeDotMenu />
        </Box>
    )
}