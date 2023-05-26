"use client";

import BigButton from "@/app/(routes)/(main)/home/components/BigButton";
import { useAppContext } from "@/app/context/app_state";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const styles = {
    header: {
      fontWeight: 'bold',
      textAlign: 'center',
      pt: 10,
    },
    content: {
      height: "90%",
      display: "flex",
      flexDirection: "column",
    },
    buttonBox: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    callButton: {
      backgroundColor: "#60AFFF",
      mx: 4,
    },
    editButton: {
      backgroundColor: "#D09E14",
      mx: 4,
      "&:hover": {
        backgroundColor: "#947D3F",
      },
    }
  };

  const router = useRouter();
  const { userFirstName } = useAppContext();

  const handleClickCall = () => {
    router.push('/call');
  };

  const handleClickEdit = () => {
    router.push('/edit');
  }

  return (
    <Box sx={styles.content}>
      <Typography variant="h3" sx={styles.header}>
        Welcome, {userFirstName}
      </Typography>
      <Box sx={styles.buttonBox}>
        <BigButton handleClick={handleClickCall} smallText="MAKE A" largeText="CALL" style={styles.callButton} />
        <BigButton handleClick={handleClickEdit} smallText="EDIT" largeText="TEMPLATES" style={styles.editButton} />
      </Box>
    </Box>
  );
}
