import { Inter } from "next/font/google"; // Import Inter from Google Fonts
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"], // Specify the subsets you need
  variable: "--font-inter", // Define a CSS variable for the font
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify font weights
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}> 
      <body className="antialiased"> 
        <Toaster /> 
        <Header />
        <NextUIProvider>{children}</NextUIProvider> 
        <Footer />
      </body>
    </html>
  );
}
