import { Typography } from "@mui/material";

export default function ClientTellLogo(){
    const styles = {
        logo: {
            fontFamily: "'Koulen', cursive",
            fontSize: "36px",
            color: "#3D5C7E",
            textDecoration: "none",
            display: "inline-block",
        },
    }

    return (
        <Typography sx={styles.logo}>
            CLIENTTELL
        </Typography>
    )
}