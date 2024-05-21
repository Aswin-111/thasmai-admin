
import { Inter } from "next/font/google";
import ProtectedRoutes from "./protectRoute/protectRoute";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/siderbar/sidebar";
import {Toaster} from 'react-hot-toast';
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log('log',children);
  return (
    <html lang="en">
      <head>
        <title>Thasmai admin</title>
        <link rel="icon" href="/thasmai-logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
      <div className="m-0 p-0 flex w-[100vw] h-[100vh] overflow-hidden">
          <Toaster />
          <div className="m-0 w-[18%] h-full">
            <SideBar/>  
          </div>
          <div className="w-[82%] h-full">
            <Navbar/>
            <div className="border-solid border-t-4 border-l-4 w-full h-full py-5 px-2 bg-[#F3F3F3]">{ 
              <ProtectedRoutes> {children}</ProtectedRoutes>
           
             }</div>
          </div>
        </div>
      </body>
    </html>
  );
}
