"use client";

import { getAllTemplates } from "@/app/data";
import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import TemplateSelector from "../../../components/TemplateSelector";

export default function Call(){
    const styles = {
        main: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
        },
        backButton: {
            height: "90px",
            p: 1.5,
        },
        arrowIcon: {
            fill: "grey",
        },
        selectorsBox: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        }
    };

    const router = useRouter();

    const handleBack = () => {
        router.push("/home");
    };

    const templates = getAllTemplates();

    return (
        <Box sx={styles.main}>
            <Box sx={styles.backButton}>
                <IconButton onClick={handleBack}>
                    <ArrowBack fontSize="large" sx={styles.arrowIcon}/>
                </IconButton>
            </Box>
            <Typography variant="h3" fontWeight="bold" textAlign="center" height="100px">Choose a template to use</Typography>
            <Box sx={styles.selectorsBox}>
                {templates.map((template) => {
                    return <TemplateSelector key={template.uuid} template={template} action="use" />
                })}
            </Box>
        </Box>
    );
}