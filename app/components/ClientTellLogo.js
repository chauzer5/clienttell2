import { Typography } from "@mui/material";

export default function ClientTellLogo(props){
    const { style } = props;

    const styles = {
        logo: {
            fontFamily: "'Koulen', cursive",
            fontSize: "36px",
            color: "#3D5C7E",
            textDecoration: "none",
            display: "inline-block",
            ...style,
        },
    }

    return (
        <Typography sx={styles.logo}>
            CLIENTTELL
        </Typography>
    )
}