import FloatingAnimationPage from "@/components/animations/float-animation";
import QatarTravel from "@/components/animations/qatar-travel/page";
import TestComponent from "@/components/animations/test-component";
import { Metadata } from "next";

type Animation = {
  title: string;
  label: string;
  description: string;
  url: string;
  imgUrl: string;
  imgAlt: string;
  keywords: string[];
  component: React.ReactNode;
};

export const animationData: Animation[] = [
  {
    title: "Floating Animation",
    description:
      "Discover a float animation created with Framer Motion, featuring smooth interactions that enhance creativity and user experience using JavaScript techniques",
    label: "float-animation",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/animations/float-animation`,
    keywords: [
      "zuhal",
      "web",
      "web animation",
      "framer motion",
      "javascript animation",
      "javascript node.js",
      "animasi",
      "interaktif",
    ],
    imgUrl: "/float-animation-og-image.png",
    imgAlt: "Floating animation created by Zuhal",
    component: <FloatingAnimationPage />,
  },
  // {
  //   label: "qatar-travel",
  //   component: <QatarTravel />,
  //   metadata: {
  //     title: {
  //       template: "Zuhal | %s",
  //       default: "Zuhal | Web Developer",
  //     },
  //     description:
  //       "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
  //     authors: [
  //       { name: "Zuhal" },
  //       { name: "Mohammad Dzakiyyul Ashfiya El Arif" },
  //     ],
  //     creator: "Zuhal",
  //     metadataBase: new URL("https://dzakiyyulashfiya.my.id"),
  //     keywords: [
  //       "zuhal",
  //       "zuhal dev",
  //       "web developer Surabaya",
  //       "nextjs developer",
  //       "frontend developer",
  //       "portfolio website",
  //       "fullstack developer",
  //       "web software development",
  //     ],
  //     openGraph: {
  //       title: "Zuhal | Web Developer",
  //       description:
  //         "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
  //       url: "https://dzakiyyulashfiya.my.id",
  //       siteName: "Portfolio Website Mohammad Dzakiyyul",
  //       images: [
  //         {
  //           url: "/og-image.png",
  //           width: 1200,
  //           height: 630,
  //           alt: "Portfolio Website Zuhal",
  //         },
  //       ],
  //       locale: "en_US",
  //       type: "website",
  //     },
  //     twitter: {
  //       card: "summary_large_image",
  //       title: "Zuhal | Web Developer",
  //       description:
  //         "A passionate Web Developer, specialized in JavaScript. developing modern and scalable website using NextJS, NestJS, and TailwindCSS for responsive design",
  //       creator: "Zuhal",
  //       images: [
  //         {
  //           url: "/og-image.png",
  //           width: 1000,
  //           height: 630,
  //         },
  //       ],
  //     },
  //     robots: { index: true, follow: true },
  //     category: "technology",
  //   },
  // },
];
