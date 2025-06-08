import "./globals.css";

export const metadata = {
  title: "mock home page",
  description: "this is a mock home page for testing purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
