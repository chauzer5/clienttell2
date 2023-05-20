"use client";

import { Typography } from "@mui/material";
import { useAppContext } from "../context/app_state";

export default function Home() {
  const { userFirstName } = useAppContext();

  return (
    <Typography onClick={()=>{console.log(userFirstName)}}>Welcome, {userFirstName}</Typography>
  );
}
