import { Box, Button, Card, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useCallContext } from "@/app/context/call_state";

export default function PromptItem(props){
    const styles = {
        prompt_box: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        prompt_card: {
            flexGrow: 1,
            m: 1,
            display: "flex",
            alignItems: "center",
            px: 3,
            py: 2,
        },
        add_button: {
            height: "50px",
            width: "50px",
            backgroundColor: "#60AFFF",
            m: 1,
        },
    };

    const { prompt } = props;
    const { folderPath, prompts, setPrompts, setCurrentPromptEdit } = useCallContext();

    const handleClick = () => {
        const folderPathAsString = folderPath.map(folder => folder.name).reverse().join(" - ");
        let numPrompts = prompts.length;
        setPrompts(prompts.concat({prompt: prompt.text, path: folderPathAsString, note: ""}));
        setCurrentPromptEdit(numPrompts);
    };

    return (
        <Box sx={styles.prompt_box}>
            <Card sx={styles.prompt_card}>
                <Typography>{prompt.text}</Typography>
            </Card>
            <Button onClick={handleClick} variant="contained" sx={styles.add_button}>
                <AddIcon fontSize="large"/>
            </Button>
        </Box>
    );
}