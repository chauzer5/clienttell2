"use client";

import { Button, Card, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import NewCallModalButton from "./NewCallModalButton";

export default function TemplateSelector(props){
    const styles = {
        card: {
            width: "800px",
            height: "125px",
            m: 2,

            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-around",
            alignItems: "center",
            p:3,
            gap: "35px",
        },
        button: {
            width: "150px",
            mr: 2,
            backgroundColor: '#60AFFF',
        },
        editButton: {
            backgroundColor: "#D09E14",
            mr: 2,
            width: "150px",
            "&:hover": {
                backgroundColor: "#947D3F",
            }
        }
    };

    const {
        template,
        action,
    } = props;

    const router = useRouter();

    const handleEdit = () => {
        router.push(`/edit/${template.uuid}`);
    }

    const buttonComponent = (action === "use"
    ? <NewCallModalButton templateUuid={template.uuid} />
    : <Button onClick={handleEdit} variant="contained" sx={styles.editButton}>edit</Button>
    );

    return (
        <Card sx={styles.card}>
            <Typography variant="h4" fontWeight="bold" width="300px" textAlign="center">
                {template.name}
            </Typography>
            <Divider orientation="vertical" variant="middle"/>
            <Typography width="400px">
                {template.description}
            </Typography>
            <Divider orientation="vertical" variant="middle" />
            {buttonComponent}
        </Card>
    );
}