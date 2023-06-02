"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getAllTemplates } from "../data";
import { Box, Button, FormLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useCallContext } from "../context/call_state";

export default function NewCallModalButton(props){
    const styles = {
        button: {
            width: "150px",
            mr: 2,
            backgroundColor: "#60AFFF",
        },
        box: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
        },
        header: {
            mb: 5,
        },
        field: {
            mt: 1,
            mb: 4,
        },
        label: {
            fontSize: "12px",
        },
        half_size_field: {
            width: "45%",
            display: "flex",
            flexDirection: "column",
        },
        topSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        submitButton: {
            backgroundColor: "#60AFFF",
            ml: 3,
        },
    };

    const { templateUuid } = props;

    const router = useRouter();

    const [template, setTemplate] = useState(templateUuid);
    const [companyName, setCompanyName] = useState("");
    const [contactName, setContactName] = useState("");
    const [notes, setNotes] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const { setCallInfo, setCurrentTemplate } = useCallContext();

    const today = new Date();
    const todayString = `${ String(today.getDate()).padStart(2, "0") }/${ String(today.getMonth()+1).padStart(2, "0") }/${ today.getFullYear() }`;

    const handleOpenModal = () => {
        setModalOpen(true);
        setTemplate(templateUuid);
    };

    const handleCloseModal = () => {
        setCompanyName("");
        setContactName("");
        setNotes("");
        setModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCallInfo({
            template,
            date: todayString,
            companyName,
            contactName,
            notes,
        });
        setCurrentTemplate(template);
        router.push(`/call/${template}`);
    };

    return (
        <>
            <Button onClick={handleOpenModal} variant="contained" sx={styles.button}>use</Button>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={modalOpen}
                onClose={handleCloseModal}
            >
                <Box sx={styles.box}>
                    <Typography id="modal-modal-title" variant="h5" fontWeight="bold" sx={styles.header}>
                        Start a new call
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={styles.topSection}>
                            <Box sx={styles.half_size_field}>
                                <FormLabel sx={styles.label}>Template</FormLabel>
                                <Select
                                    defaultValue={templateUuid}
                                    value={template}
                                    onChange={(e) => setTemplate(e.target.value)}
                                    size="small"
                                    sx={styles.field}
                                >
                                    {
                                        getAllTemplates().map((template) => {
                                            return <MenuItem key={template.uuid} value={template.uuid}>{template.name}</MenuItem>;
                                        })
                                    }
                                </Select>
                            </Box>
                            <Box sx={styles.half_size_field}>
                                <FormLabel sx={styles.label}>Date</FormLabel>
                                <TextField defaultValue={todayString} disabled={true} size="small" sx={styles.field}/>
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
                            <Button type="submit" variant="contained" sx={styles.submitButton}>Start</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    );

}