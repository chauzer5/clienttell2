import { Box, Button, FormLabel, IconButton, Modal, TextField, Typography } from "@mui/material";
import { useCallContext } from "../context/call_state";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { getTemplateByUUID } from "../data";

export default function CallInfoHeader(){
    const styles = {
        root: {
            display: "flex",
            flexDirection: "row",
        },
        call_info: {
            color: "white",
            fontSize: "20px"
        },
        modalBox: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 1
        },

        header: {
            mb: 5
        },

        label: {
            fontSize: "12px"
        },

        half_size_field: {
            width: "45%",
            display: "flex",
            flexDirection: "column"
        },

        field: {
            mt: 1,
            mb: 4
        }
    };

    const { callInfo, setCallInfo, currentTemplate } = useCallContext();

    const [modalOpen, setModalOpen] = useState(false);
    const [companyName, setCompanyName] = useState(callInfo.companyName);
    const [contactName, setContactName] = useState(callInfo.contactName);
    const [notes, setNotes] = useState(callInfo.notes);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setCompanyName(callInfo.companyName);
        setContactName(callInfo.contactName);
        setNotes(callInfo.notes);
        setModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCallInfo({
            companyName,
            contactName,
            notes,
            date: callInfo.date,
        });
        setModalOpen(false);
    };

    return (
        <>
            <Box sx={styles.root}>
                <Typography sx={styles.call_info}>
                    {callInfo.companyName ?
                    `Call with ${callInfo.companyName} (${callInfo.date})` :
                    `Call on ${callInfo.date}`}
                </Typography>
                <IconButton onClick={handleOpenModal} size="small" sx={{ml: 2}}>
                    <EditIcon sx={{fill: "white"}}/>
                </IconButton>
            </Box>

            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={modalOpen}
                onClose={handleCloseModal}
            >
                <Box sx={styles.modalBox}>
                    <Typography id="modal-modal-title" variant="h5" fontWeight="bold" sx={styles.header}>
                        Edit call info
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Box sx={styles.half_size_field}>
                                <FormLabel sx={styles.label}>Template</FormLabel>
                                <TextField disabled={true} defaultValue={getTemplateByUUID(currentTemplate).name} size="small" sx={styles.field}/>
                            </Box>
                            <Box sx={styles.half_size_field}>
                                <FormLabel sx={styles.label}>Date</FormLabel>
                                <TextField defaultValue={callInfo.date} disabled={true} size="small" sx={{...styles.field}}/>
                            </Box>
                        </Box>
                        <FormLabel sx={styles.label}>Company Name</FormLabel>
                        <TextField value={companyName} onChange={(e) => setCompanyName(e.target.value)} size="small" fullWidth sx={styles.field}/>
                        <FormLabel sx={styles.label}>{"Contact Name"}</FormLabel>
                        <TextField value={contactName} onChange={(e) => setContactName(e.target.value)} size="small" fullWidth sx={styles.field}/>
                        <FormLabel sx={styles.label}>{"Additional Notes"}</FormLabel>
                        <TextField value={notes} onChange={(e) => setNotes(e.target.value)} multiline rows={5} size="small" fullWidth sx={styles.field}/>
                        <Box sx={{display: "flex", flexDirection:"row", justifyContent:"flex-end"}}>
                            <Button onClick={handleCloseModal}>Cancel</Button>
                            <Button type="submit" variant="contained" sx={{backgroundColor: "#60AFFF", ml: 3}}>Save</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    );
}