import { useCallContext } from "@/app/context/call_state";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function AddedPromptEditor(props){
    const styles = {
        card: {
            maxWidth: "100%",
            m: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
        },
        prompt_box: {
            height: "25%",
            display: "flex",
            alignItems: "center",
            py: 2
        },
        input_box: {
            flexGrow: 1,
            px: 3
        },
        buttons_box: {
            height: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 3,
            py: 1
        },
        prompt: {
            fontWeight: "bold",
            px: 3
        },
    };

    const { index, prompt } = props;
    const { setCurrentPromptEdit, prompts, setPrompts} = useCallContext();
    const [ note, setNote ] = useState(prompt.note);

    const handleSave = () => {
        updateNote();
        setCurrentPromptEdit(null);
    };

    const updateNote = () => {
        let newPrompts = [];
        for(let i = 0; i < prompts.length; i++){
            if(index !== i){
                newPrompts.push(prompts[i]);
            }
            else{
                newPrompts.push({...prompts[i], note});
            }
        }
        setPrompts(newPrompts);
    };

    useEffect(() => {
        updateNote();
    });

    return (
        <Card sx={styles.card}>
            <Box sx={styles.prompt_box}>
                <Typography sx={styles.prompt}>{prompt.prompt}</Typography>
            </Box>
            <Box sx={styles.input_box}>
                <TextField
                    autoFocus
                    value={note}
                    placeholder="Type here"
                    multiline rows={3}
                    size="small"
                    fullWidth
                    onChange={(e) => setNote(e.target.value)}
                />
            </Box>
            <Box sx={styles.buttons_box}>
                <Button onClick={handleSave}>Save</Button>
            </Box>
        </Card>
    );
}