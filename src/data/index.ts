import booklyImg from "/public/image/portfolio4.png";
import tetespenaImg from "/public/image/tetespena.jpg";
import tetespenaAPIImg from "/public/image/tetespena-api.png";
import exportImg from "/public/image/export.png";

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

import exp1 from "/public/exp1.svg";

export const portfolios = [
  {
    id: 1,
    title: "Tetespena Article Management Website",
    desc: "A comprehensive article management platform that allows users to create, edit, and manage articles seamlessly.",
    img: tetespenaImg,
    iconLists: [
      TsIcon,
      NextjsIcon,
      ReduxIcon,
      FramerIcon,
      ShadcnIcon,
      NestjsIcon,
      PrismaIcon,
    ],
    nameBtn: "Live Site",
    link: "https://tetespena.site",
  },
  {
    id: 2,
    title: "Tetespena REST API and Documentation",
    desc: "A fully documented API offering efficient data management, with detailed documentation to guide users through the endpoints.",
    img: tetespenaAPIImg,
    iconLists: [TsIcon, NestjsIcon, PrismaIcon, SwaggerIcon],
    nameBtn: "Live Site",
    link: "https://app.swaggerhub.com/apis/zuhalcode/article-api/1.0",
  },
  {
    id: 3,
    title: "Export Product Recommender Website",
    desc: "A platform designed to help users find suitable export products, providing personalized recommendations based on data analysis.",
    img: exportImg,
    iconLists: [TsIcon, NextjsIcon, TailwindIcon, NestjsIcon, PrismaIcon],
    nameBtn: "Github Site",
    link: "https://github.com/zuhalcode/export-recommender",
  },
  {
    id: 4,
    title: "Bookly - Booking Management System",
    desc: "A solution for managing bookings and reservations, offering streamlined workflows for both customers and businesses.",
    img: booklyImg,
    iconLists: [LaravelIcon, MysqlIcon],
    nameBtn: "Github Site",
    link: "https://github.com/zuhalcode/bookly-createch",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    img: exp1,
  },
];
