"use client";

import { Typography } from "@mui/material";
import { useAppContext } from "../context/app_state";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseSetup";
import { useRouter } from "next/navigation";

export default function Home() {
  const { userFirstName } = useAppContext();
  const router = useRouter();

  return (
    <>
      <Typography>Welcome, {userFirstName}</Typography>
      <Typography onClick={()=>{
        signOut(auth).then(() => {
          router.push('/signin');
        });
        
      }}>Sign out</Typography>
    </>
  );
}
