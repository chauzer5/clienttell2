import "./globals.css";

export const metadata = {
  title: 'ClientTell',
  description: 'Efficient sales call notes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
