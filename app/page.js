'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./firebase/firebaseSetup";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    if(!auth.currentUser){
      router.push("/signin");
    }
    else{
      router.push("/home");
    }
  }, []);

  return (
    <></>
  );
}
