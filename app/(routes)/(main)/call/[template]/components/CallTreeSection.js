"use client";

import { useCallContext } from "@/app/context/call_state";
import { Box, Button, Divider, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PromptItem from "./PromptItem";
import { getTemplateByUUID } from "@/app/data";
import utils from "@/app/utils";

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
                backgroundColor: utils.colorModify("#5B5B5B", -40),
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
            justifyContent: "flex-start",
        },
        pressed_folder: {
            boxShadow: "inset 0px 3px 5px 0px rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        }
    };

    const {
        folderPath,
        setFolderPath,
        currentTemplate,
    } = useCallContext();

    const template = getTemplateByUUID(currentTemplate);
    const templateNodes = template.nodes;

    const handleGoDown = (folder) => {
        // looping folders will just go back to the folder instead of adding on to folderPath
        for(let i = 0; i < folderPath.length; i++){
            if(folderPath[i].id === folder.id){
                setFolderPath(folderPath.slice(0, i + 1));
                return;
            }
        }

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
        let children;
        if(folderPath.length === 0){
            children = templateNodes[0].children;
        }
        else{
            children = folderPath[folderPath.length - 1].children;
        }

        const unorderedNodes = templateNodes.filter(node => children.includes(node.id));
        const orderedNodes = [];
        children.forEach((id) => {
            orderedNodes.push(unorderedNodes.filter(node => node.id === id)[0]);
        });

        return orderedNodes;
    };

    return (
        <>
            <Box sx={styles.folders}>
                {folderPath.length === 0 ? (
                    <Box sx={styles.folder_box}>
                        <Box sx={{...styles.home_button, ...styles.pressed_folder, justifyContent: "center", "&:hover":{backgroundColor: "#5B5B5B"}, flexGrow: 1}}>
                            <HomeIcon sx={{fill: "white"}} fontSize="large"/>
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Box sx={styles.folder_box}>
                            <Button onClick={handleGoHome} variant="contained" sx={styles.home_button}>
                                <HomeIcon fontSize="large"/>
                            </Button>
                            { folderPath.length > 1 ? (
                                <Button
                                    onClick={() => {handleGoUp(folderPath[0])}}
                                    variant="contained"
                                    sx={{
                                        ...styles.folder_button,
                                        backgroundColor: folderPath[0].color,
                                        "&:hover": {backgroundColor: utils.colorModify(folderPath[0].color, -40)}
                                    }}
                                >
                                    {folderPath[0].name}
                                </Button>
                            ) : (
                                <Box
                                    onClick={() => {handleGoUp(folderPath[0])}}
                                    sx={{
                                        ...styles.folder_button,
                                        ...styles.pressed_folder,
                                        backgroundColor: folderPath[0].color,
                                        "&:hover": {backgroundColor: folderPath[0].color}
                                    }}
                                >
                                    <Typography sx={{color: "white", fontWeight: 700, fontSize: "18px"}}>{folderPath[0].name}</Typography>
                                </Box>
                            )}
                        </Box>

                        {folderPath.slice(1).map((folder, index) => {
                            return (
                                <Box key={folder.id} sx={styles.folder_box}>
                                    { index !== folderPath.length - 2 ? (
                                        <Button
                                            onClick={() => {handleGoUp(folder)}}
                                            variant="contained"
                                            sx={{
                                                ...styles.folder_button,
                                                backgroundColor: folder.color,
                                                "&:hover": {backgroundColor: utils.colorModify(folder.color, -40)},
                                            }}
                                        >
                                            {folder.name}
                                        </Button>
                                    ) : (
                                        <Box
                                            onClick={() => {handleGoUp(folder)}}
                                            variant="contained"
                                            sx={{
                                                ...styles.pressed_folder,
                                                ...styles.folder_button,
                                                backgroundColor: folder.color,
                                                "&:hover": {backgroundColor: folder.color},
                                            }}
                                        >
                                            <Typography sx={{color: "white", fontWeight: 700, fontSize: "18px"}}>{folder.name}</Typography>
                                        </Box>
                                    )}
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
                                        "&:hover": {backgroundColor: utils.colorModify(node.color, -40)}
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