import { AppWrapper } from "./context/app_state";

export const metadata = {
  title: 'ClientTell',
  description: 'Efficient sales call notes',
};

export default function RootLayout({ children }) {
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
