import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Om's Portfolio",
  description:
    "Welcome to my portfolio website which showcase my passion towards web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#FAF0E4]">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
