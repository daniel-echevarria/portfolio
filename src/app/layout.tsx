import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
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

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daniel Echevarria",
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
        className={`${ibmPlexSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto`}
      >
        <div className="grid grid-rows-[50px_1fr_50px] lg:grid-rows-[50px_1fr_50px] items-center min-h-screen p-8 sm:px-16">
          <Nav />
          {children}
          <footer className="w-full my-14 sm:my-14 animate-fade-in-up opacity-0">
            <div className="text-sm text-center p-2">
              <p>
                &copy; {new Date().getFullYear()} Daniel Echevarria. All Rights
                Reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
