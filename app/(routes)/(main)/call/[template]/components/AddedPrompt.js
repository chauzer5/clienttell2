import { Box, Card, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallContext } from "@/app/context/call_state";
import { useEffect, useRef } from "react";

export default function AddedPrompt(props){
    const styles = {
        card: {
            height: "90px",
            m: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
        },
        content_box: {
            flexGrow: 1,
            maxWidth: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
        },
        button_box: {
            width: "125px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        icon: {
            fontSize: "25px"
        },
        prompt_and_path: {
            height: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%"
        },
        prompt: {
            mx: 3,
            fontWeight: "bold",
            width: "630px",
            // direction: "rtl"
        },
        path: {
            fontWeight: "bold",
            color: "#ABABAB"
        },
        note_box: {
            height: "50%",
            display: "flex",
            alignItems: "flex-start"
        },
        note: {
            width: "630px",
            fontSize: "14px",
            px: 3
        },
    };

    const { index, prompt } = props;
    const { prompts, setPrompts, currentPromptEdit, setCurrentPromptEdit } = useCallContext();

    const handleEdit = () => {
        setCurrentPromptEdit(index);
    };

    const handleDelete = () => {
        let newPrompts = prompts.slice();
        newPrompts.splice(index, 1);

        setPrompts(newPrompts);
        if(currentPromptEdit > index){
            setCurrentPromptEdit(currentPromptEdit - 1);
        }
    };

    const promptsEndRef = useRef(null);
    const lastItem = (prompts.length > 0) ? prompts[prompts.length - 1].prompt : "";
    
    useEffect(() => {
        promptsEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [lastItem]);

    return (
        <Card sx={styles.card}>
            <Box sx={styles.content_box}>
                <Box sx={styles.prompt_and_path}>
                    <Typography noWrap sx={styles.prompt}>{`${prompt.prompt} `}<span style={{color: "#ABABAB"}}>{prompt.path}</span></Typography>
                </Box>
                <Box sx={styles.note_box}>
                    <Typography noWrap sx={styles.note}>{prompt.note}</Typography>
                </Box>
            </Box>

            <Box sx={styles.button_box}>
                <IconButton onClick={handleEdit}><EditIcon sx={styles.icon}/></IconButton>
                <IconButton onClick={handleDelete}><DeleteIcon sx={styles.icon}/></IconButton>
            </Box>
        </Card>
    );
}