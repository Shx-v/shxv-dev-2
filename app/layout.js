import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shivranjan",
  description: "Portfolio Website of Shivranjan Bharadwaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden select-none`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
