import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { inter } from "./ui/fonts";
import Nav from "@/app/ui/Nav";

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
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto`}
      >
        <Nav />
        {children}
        <footer className=" mb-2">
          <div className="text-sm text-center p-2">
            <p>&copy; 2024 Daniel Echevarria. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
