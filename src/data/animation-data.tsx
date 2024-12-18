import FloatingAnimationPage from "@/components/animations/float-animation";
import QatarTravelV2 from "@/components/animations/qatar-travel-v2/page";
import QatarTravel from "@/components/animations/qatar-travel/page";
import FloatingPage from "@/components/animations/test-component";
import TestComponent from "@/components/animations/test-component";
import { Metadata } from "next";

type Animation = {
  title: string;
  label: string;
  description: string;
  url: string;
  imgAlt: string;
  imgUrl: string;
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
    imgUrl: "floating.png",
    component: <FloatingAnimationPage />,
  },
  {
    label: "qatar-travel",
    title: "Qatar Travel",
    description:
      "Discover a float animation created with Framer Motion, featuring smooth interactions that enhance creativity and user experience using JavaScript techniques",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/animations/qatar-travel`,
    keywords: [
      "zuhal",
      "qatar",
      "landingi",
      "landing page",
      "travel",
      "travel terdekat",
      "animasi",
      "animation",
    ],
    imgAlt: "Qatar travel animation created by Zuhal",
    imgUrl: "qatar.png",
    component: <QatarTravel />,
  },
  {
    label: "qatar-travel-v2",
    title: "Qatar Travel V2",
    description:
      "Discover a float animation created with Framer Motion, featuring smooth interactions that enhance creativity and user experience using JavaScript techniques",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/animations/qatar-travel`,
    keywords: [
      "zuhal",
      "qatar",
      "landingi",
      "landing page",
      "travel",
      "travel terdekat",
      "animasi",
      "animation",
    ],
    imgAlt: "Qatar travel animation created by Zuhal",
    imgUrl: "qatar.png",
    component: <QatarTravelV2 />,
  },
  {
    label: "test",
    title: "Qatar Travel",
    description:
      "Discover a float animation created with Framer Motion, featuring smooth interactions that enhance creativity and user experience using JavaScript techniques",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/animations/qatar-travel`,
    keywords: [
      "zuhal",
      "qatar",
      "landingi",
      "landing page",
      "travel",
      "travel terdekat",
      "animasi",
      "animation",
    ],
    imgAlt: "Qatar travel animation created by Zuhal",
    imgUrl: "qatar.png",
    component: <FloatingPage />,
  },
];
