export const metadata = {
  title: 'ClientTell',
  description: 'Efficient sales call notes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
