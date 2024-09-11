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
import ToolboxItems from "../ui/toolbox-items";

const ToolboxSection = () => {
  const frontEndItems = [
    { name: "ReactJS", icon: StarIcon },
    { name: "NextJS", icon: StarIcon },
    { name: "Framer Motion", icon: StarIcon },
    { name: "TailwindCSS", icon: StarIcon },
    { name: "ShadcnUI", icon: StarIcon },
    { name: "Redux", icon: StarIcon },
    { name: "React Query", icon: StarIcon },
  ];

  const backEndItems = [
    { name: "Prisma", icon: StarIcon },
    { name: "MySQL", icon: StarIcon },
    { name: "NestJS", icon: StarIcon },
    { name: "TypeScript", icon: StarIcon },
    { name: "Laravel", icon: StarIcon },
    { name: "Swagger", icon: StarIcon },
  ];
  return (
    <div className="mx-auto flex items-center justify-center px-3 py-16">
      <Card className="w-[350px] bg-gray-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <StarIcon className="size-12 text-emerald-300" />
            <span className="text-white">My Toolbox</span>
          </CardTitle>
          <CardDescription>
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
