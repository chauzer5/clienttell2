import { Box, Button, Typography } from "@mui/material";

export default function BigButton(props){
    const styles = {
        button: {
            width: 450,
            height: 200,
            ...props.style,
        },
        smallText: {
            fontSize: 36,
        },
        largeText: {
            fontSize: 64,
        },
        box: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    };

    const {
        handleClick,
        smallText,
        largeText,
    } = props;

    return (
        <Button onClick={handleClick} variant="contained" sx={styles.button}>
            <Box sx={styles.box}>
                <Typography sx={styles.smallText}>{smallText}</Typography>
                <Typography sx={styles.largeText}>{largeText}</Typography>
            </Box>
        </Button>
    );
}