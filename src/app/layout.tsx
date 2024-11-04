import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import "./globals.css";

import { Calistoga, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: { default: "Web Developer", template: "%s - Web Developer" },
  description:
    "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
};

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
          "bg-secondary font-sans text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
