import { Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

export default function AddTemplateButton(){
    const styles = {
        card: {
            width: "800px",
            height: "125px",
            m: 2,
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    };

    const router = useRouter();
    const handleClick = () => {
        // TODO
    };

    return (
        <Button onClick={handleClick}>
            <Card sx={styles.card}>
                <AddIcon sx={{fontSize: "60px", fill: "grey"}}/>
            </Card>
        </Button>
    );
}