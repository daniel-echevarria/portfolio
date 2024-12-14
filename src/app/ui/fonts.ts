import { Shippori_Mincho, Merriweather, Inter } from "next/font/google";

// Load the Shippori Mincho font
export const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
});

export const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});
