import petonaImg from "/public/image/portfolio1.png";
import booklyImg from "/public/image/portfolio4.png";
import tetespenaImg from "/public/image/tetespena.jpg";

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
    title: "Tetespena Article Management Website",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: petonaImg,
    iconLists: [
      TsIcon,
      NextjsIcon,
      ReduxIcon,
      FramerIcon,
      ShadcnIcon,
      NestjsIcon,
      PrismaIcon,
    ],
    link: "https://tetespena.site",
  },
  {
    id: 2,
    title: "Tetespena REST API and Documentation",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: booklyImg,
    iconLists: [TsIcon, NestjsIcon, PrismaIcon, SwaggerIcon],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Export Product Recommender Website",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: tetespenaImg,
    iconLists: [TsIcon, NextjsIcon, TailwindIcon, NestjsIcon, PrismaIcon],
    link: "/ui.aiimg.com",
  },
  {
    id: 3,
    title: "Bookly - Booking Management System",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: tetespenaImg,
    iconLists: [LaravelIcon, MysqlIcon],
    link: "/ui.aiimg.com",
  },
];
