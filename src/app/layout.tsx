import { twMerge } from "tailwind-merge";
import "./globals.css";

import { Calistoga, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-sans text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
