import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/sections/Navbar";
import Footer from "./_components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodieland",
  description: "This site is for Food lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
