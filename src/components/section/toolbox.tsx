import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

import ToolboxItems from "../ui/toolbox-items";

const ToolboxSection = () => {
  const frontEndItems = [
    { name: "ReactJS", icon: ReactjsIcon },
    { name: "NextJS", icon: NextjsIcon },
    { name: "Framer Motion", icon: FramerIcon },
    { name: "TailwindCSS", icon: TailwindIcon },
    { name: "ShadcnUI", icon: ShadcnIcon },
    { name: "Redux", icon: ReduxIcon },
  ];

  const backEndItems = [
    { name: "Prisma", icon: PrismaIcon },
    { name: "MySQL", icon: MysqlIcon },
    { name: "NestJS", icon: NestjsIcon },
    { name: "TypeScript", icon: TsIcon },
    { name: "Laravel", icon: LaravelIcon },
    { name: "Swagger", icon: SwaggerIcon },
  ];
  return (
    <div className="mx-auto flex items-center justify-center px-3 pb-40 pt-16">
      <Card className="w-full bg-primary/80 sm:max-w-xl md:max-w-2xl">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="flex items-center justify-center gap-3">
            <StarIcon className="text-primary-fourth size-12" />
            <span className="text-white">My Tech Stack</span>
          </CardTitle>
          <CardDescription className="text-center text-white/60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            deserunt?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 overflow-hidden">
          <ToolboxItems
            items={frontEndItems}
            itemsWrapperClassName="[animation-duration:30s] animate-move-right"
          />
          <ToolboxItems
            items={backEndItems}
            itemsWrapperClassName="[animation-duration:30s] animate-move-left"
          />
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default ToolboxSection;
