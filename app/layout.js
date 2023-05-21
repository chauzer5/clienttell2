"use client";

import "./globals.css";
import { AppWrapper } from "./context/app_state";
import { auth } from "./firebase/firebaseSetup";
import { useEffect } from "react";

// export const metadata = {
//   title: 'ClientTell',
//   description: 'Efficient sales call notes',
// };

export default function RootLayout({ children }) {

  useEffect(() => {
    console.log("AUTH");
    console.log(auth);
  });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
      </head>
      <body>

        <AppWrapper>
          {children}
        </AppWrapper>

      </body>
    </html>
  );
}
