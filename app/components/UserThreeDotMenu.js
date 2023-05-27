"use client";

import { signOut } from "@firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseSetup";
import { IconButton, ListItemIcon, Menu, MenuItem, Typography, Box } from "@mui/material";
import { useAppContext } from "../context/app_state";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Logout } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function UserThreeDotMenu(){
    const styles = {
        main: {
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            mx: 2,
        },
        iconButton: {
            ml: 2,
        },
        icon: {
            fill: "white",
        },
        paper: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        }
    };

    const router = useRouter();
    const { userFirstName } = useAppContext();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        signOut(auth);
        router.push("/signin");
    };

    return (
        <>
            <Box sx={styles.main}>
                <Typography color="white">{userFirstName}</Typography>
                <IconButton
                    onClick={handleOpen}
                    size="small"
                    sx={styles.iconButton}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                >
                    <MoreVertIcon sx={styles.icon} />
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: styles.paper,
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Sign out
                </MenuItem>
            </Menu>
        </>
    );
}