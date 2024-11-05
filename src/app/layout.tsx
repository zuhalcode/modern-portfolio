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
  title: {
    template: "Zuhal | %s",
    default: "Zuhal | Web Developer",
  },
  description:
    "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
  authors: [{ name: "Zuhal" }, { name: "Mohammad Dzakiyyul Ashfiya El Arif" }],
  creator: "Zuhal",
  metadataBase: new URL("https://dzakiyyulashfiya.my.id"),
  keywords: [
    "zuhal",
    "zuhal dev",
    "web developer Surabaya",
    "nextjs developer",
    "frontend developer",
    "portfolio website",
    "fullstack developer",
    "web software development",
  ],
  openGraph: {
    title: "Zuhal | Web Developer",
    description:
      "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
    url: "https://dzakiyyulashfiya.my.id",
    siteName: "Portfolio Website Mohammad Dzakiyyul",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Website Zuhal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuhal | Web Developer",
    description:
      "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
    creator: "Zuhal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: { index: true, follow: true },
  category: "technology",
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
