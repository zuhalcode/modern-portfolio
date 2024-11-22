import { Calistoga, Inter, Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
