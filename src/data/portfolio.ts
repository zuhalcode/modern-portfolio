import petonaImg from "/public/image/portfolio1.png";
import booklyImg from "/public/image/portfolio4.png";
import tetespenaImg from "/public/image/tetespena.jpg";

import StarIcon from "@/assets/star.svg";
import FramerIcon from "@/assets/framer-icon.svg";
import NextjsIcon from "@/assets/nextjs-icon.svg";
import NestjsIcon from "@/assets/nestjs-icon.svg";
import TsIcon from "@/assets/ts-icon.svg";
import LaravelIcon from "@/assets/laravel-icon.svg";
import ReactjsIcon from "@/assets/reactjs-icon.svg";
import TailwindIcon from "@/assets/tailwind-icon.svg";
import ReduxIcon from "@/assets/redux-icon.svg";
import MysqlIcon from "@/assets/mysql-icon.svg";
import PrismaIcon from "@/assets/prisma-icon.svg";
import SwaggerIcon from "@/assets/swagger-icon.svg";
import ShadcnIcon from "@/assets/shadcn-icon.svg";

export const portfolios = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: petonaImg,
    iconLists: [ReactjsIcon, TailwindIcon, TsIcon, FramerIcon],
    link: "https://tetespena.site",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: booklyImg,
    iconLists: [NextjsIcon, TailwindIcon, TsIcon],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: tetespenaImg,
    iconLists: [ReactjsIcon, TailwindIcon, TsIcon],
    link: "/ui.aiimg.com",
  },
];
