
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/siderbar/sidebar";


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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navbar heading={"Financial"} />

        <div className="flex m-0 p-0">
          <div className="w-[18%] m-0">
            <SideBar />
          </div>  
          <div className="m-0 bg-emerald-300 w-[82%] h-[100px]   flex items-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
