import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "WikiRocket",
  description: "Created by Selajdin Memeti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
