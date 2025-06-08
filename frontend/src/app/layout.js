import "./globals.css";

export const metadata = {
  title: "mock home page",
  description: "this is a mock home page for testing purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
