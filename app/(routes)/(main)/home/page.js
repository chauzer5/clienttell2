"use client";

import { Typography } from "@mui/material";
import { useAppContext } from "../../../context/app_state";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebaseSetup";

export default function Home() {
  const { userFirstName } = useAppContext();

  return (
    <>
      <Typography>Welcome, {userFirstName}</Typography>
      <Typography onClick={()=>{
        signOut(auth).catch((error) => {
          console.log(error.message);
        });
        
      }}>Sign out</Typography>
    </>
  );
}
