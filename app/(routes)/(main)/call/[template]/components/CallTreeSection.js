"use client";

import { useCallContext } from "@/app/context/call_state";
import { Box, Button, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PromptItem from "./PromptItem";
import { getTemplateByUUID } from "@/app/data";

export default function CallTreeSection(){
    const styles = {
        folders: {
            m: 3
        },

        divider: {
            borderBottomWidth: 3,
            borderColor: "#A1A1A1"
        }, 
        contents: {
            m: 3,
            maxHeight: "600px",
            overflow: 'auto'
        },
        folder_box: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        home_button: {
            height: "50px",
            width: "50px",
            borderRadius: "0px",
            m: 0.5,
            mr: 1,
            backgroundColor: "#5B5B5B",
            "&:hover": {
                backgroundColor: "#323232"
            },
            // flexGrow: 1
        },
        folder_button: {
            height: "50px",
            borderRadius: "0px",
            m: 0.5,
            fontWeight: "bold",
            fontSize: "18px",
            textTransform: "unset !important",
            pl: 3,
            flexGrow: 1,
            justifyContent: "flex-start"
        },
        pressed_folder: {
            // DOESN'T WORK, TODO
            boxShadow: "inset 0 2 3px #000000"
        },
    };

    const {
        folderPath,
        setFolderPath,
        currentTemplate,
    } = useCallContext();

    const template = getTemplateByUUID(currentTemplate);
    const templateNodes = template.nodes;

    const handleGoDown = (folder) => {
        setFolderPath(folderPath.concat(folder));
    };

    const handleGoUp = (folder) => {
        let newFolderPath = [];
        for(let i = 0; i < folderPath.length; i++){
            newFolderPath.push(folderPath[i]);
            if(folderPath[i].id === folder.id){
                break;
            }
        }
        setFolderPath(newFolderPath);
    };

    const handleGoHome = () => { 
        setFolderPath([]);
    };

    const getContents = () => {
        let contents = [];
        templateNodes.forEach((node) => {
            if(node.parents.includes(folderPath.length === 0 ? -1 : folderPath[folderPath.length - 1].id)){
                contents.push(node);
            }
        });
        return contents;
    };

    return (
        <>
            <Box sx={styles.folders}>
                {folderPath.length === 0 ? (
                    <Box sx={styles.folder_box}>
                        <Button variant="contained" sx={{...styles.home_button, flexGrow: 1}}>
                            <HomeIcon fontSize="large"/>
                        </Button>
                    </Box>
                ) : (
                    <>
                        <Box sx={styles.folder_box}>
                            <Button onClick={handleGoHome} variant="contained" sx={styles.home_button}>
                                <HomeIcon fontSize="large"/>
                            </Button>
                            <Button
                                onClick={() => {handleGoUp(folderPath[0])}}
                                variant="contained"
                                sx={{
                                    ...styles.folder_button,
                                    backgroundColor: folderPath[0].color,
                                    "&:hover": {backgroundColor: folderPath[0].color}
                                }}
                            >
                                {folderPath[0].name}
                            </Button>
                        </Box>

                        {folderPath.slice(1).map((folder) => {
                            return (
                                <Box key={folder.id} sx={styles.folder_box}>
                                    <Button
                                        onClick={() => {handleGoUp(folder)}}
                                        variant="contained"
                                        sx={{
                                            ...styles.folder_button,
                                            backgroundColor: folder.color,
                                            "&:hover": {backgroundColor: folder.color},
                                        }}
                                    >
                                        {folder.name}
                                    </Button>
                                </Box>
                            );
                        })}
                    </>
                )}
            </Box>

            <Divider variant="middle" sx={styles.divider}/>

            <Box sx={styles.contents}>
                { getContents().map((node) => {
                    if(node.type === "folder"){
                        return (
                            <Box key={node.id} sx={styles.folder_box}>
                                <Button
                                    onClick={() => {handleGoDown(node)}}
                                    variant="contained"
                                    sx={{
                                        ...styles.folder_button,
                                        backgroundColor: node.color,
                                        "&:hover": {backgroundColor: node.color}
                                    }}
                                >
                                    {node.name}
                                </Button>
                            </Box>
                        );
                    }
                    else if(node.type === "prompt"){
                        return <PromptItem key={node.id} prompt={node} />;
                    }
                })}
            </Box>
        </>
    );
}