import FloatingAnimationPage from "@/components/animations/float-animation";
import QatarTravel from "@/components/animations/qatar-travel/page";
import TestComponent from "@/components/animations/test-component";
import { Metadata } from "next";

type Animation = {
  title: string;
  label: string;
  description: string;
  url: string;

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
    imgAlt: "Floating animation created by Zuhal",
    component: <FloatingAnimationPage />,
  },
  {
    label: "qatar-travel",
    title: "Floating Animation",
    description:
      "Discover a float animation created with Framer Motion, featuring smooth interactions that enhance creativity and user experience using JavaScript techniques",
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
    imgAlt: "Floating animation created by Zuhal",
    component: <QatarTravel />,
  },
];
