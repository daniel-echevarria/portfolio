import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { inter } from "./ui/fonts";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects.json";
import Card from "@/components/Card";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daniel Echevarria Portfolio",
  description: "Created by Daniel Echevarria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <nav className="z-10 w-full justify-between flex text-grey-900 text-xl font-bold p-8 sm:p-20">
            <Link className={`hover:underline`} href="/">
              Daniel Echevarria
            </Link>
            <Link className={`hover:underline`} href={"/about"}>
              About
            </Link>
          </nav>
          {children}
          <footer>
            <div className="text-sm text-center p-2">
              <p>&copy; 2024 Daniel Echevarria. All Rights Reserved.</p>
            </div>
          </footer>
        </>
      </body>
    </html>
  );
}
