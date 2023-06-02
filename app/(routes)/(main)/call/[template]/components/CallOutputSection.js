import { useCallContext } from "@/app/context/call_state";
import { getTemplateByUUID } from "@/app/data";
import { Box, Card, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ExportModalButton from "./ExportModalButton";
import ExitModalButton from "./ExitModalButton";
import AddedPrompt from "./AddedPrompt";
import AddedPromptEditor from "./AddedPromptEditor";

export default function CallOutputSection(){
    const styles = {
        main: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
        },
        top_section: {
            width: "100%",
            minHeight: "70%",
            maxHeight: "600px",
            overflow: 'auto',
        },
        divider: {
            borderBottomWidth: 3,
            borderColor: "#A1A1A1",
            my: 1,
        },
        bottom_section: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            p: 2,
        },
        other_notes_card: {
            flexGrow: 1,
            p: 2,
        },
        buttons: {
            width: "25%",
            ml: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
        },
        button: {
            height: "60px",
            width: "130px",
            fontSize: "18px",
        },
    };

    const { prompts, currentPromptEdit, currentTemplate } = useCallContext();
    const [otherNotes, setOtherNotes] = useState();

    return (
        <Box sx={styles.main}>
            <Box sx={styles.top_section}>
                {
                    prompts.map((prompt, index) => {
                        return (index === currentPromptEdit ?
                            <AddedPromptEditor key={index} index={index} prompt={prompt} /> :
                            <AddedPrompt key={index} index={index} prompt={prompt} />
                        );
                    })
                }
            </Box>

            <Divider variant="middle" sx={styles.divider} />

            <Box sx={styles.bottom_section}>
                <Card sx={styles.other_notes_card}>
                    <Typography variant="h6" fontWeight="bold">Other notes</Typography>
                    <TextField
                        value={otherNotes}
                        placeholder="Type here"
                        multiline
                        rows={5}
                        size="small"
                        fullWidth
                        sx={{mt: 1}}
                        onChange={e => setOtherNotes(e.target.value)}
                    />
                </Card>
                <Box sx={styles.buttons}>
                    <ExportModalButton otherNotes={otherNotes} exportOptions={getTemplateByUUID(currentTemplate).export} />
                    <ExitModalButton />
                </Box>
            </Box>
        </Box>
    );
}