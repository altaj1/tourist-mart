import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import StoreProvider from "./Providers/StoreProvider";
import QueryProvider from "./Providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <QueryProvider>
       <StoreProvider>
        <Navbar></Navbar>
        {children}
        </StoreProvider>
       </QueryProvider>
        </body>
    </html>
  );
}
