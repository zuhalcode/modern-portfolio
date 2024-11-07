import { color, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import {
  AlignJustify,
  BicepsFlexed,
  BriefcaseBusiness,
  GalleryHorizontalEnd,
  Home,
  Laptop,
  Phone,
  Plus,
  User,
  Wrench,
} from "lucide-react";

import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

const ModernCircularMenu = ({
  scroll,
}: {
  scroll?: LocomotiveScroll | null;
}) => {
  const menu = [
    { name: "hero", icon: Home, color: "#ff2c2c" },
    { name: "about", icon: User, color: "#f67731" },
    { name: "gallery", icon: GalleryHorizontalEnd, color: "#edf12b" },
    { name: "toolbox", icon: Wrench, color: "#92e926" },
    { name: "portfolio", icon: Laptop, color: "#55ff49" },
    { name: "experince", icon: BriefcaseBusiness, color: "#29dbb8" },
    { name: "skill", icon: BicepsFlexed, color: "#473be5" },
    { name: "contact", icon: Phone, color: "#e32fdf" },
  ];

  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  // const handleOnClick = (href: string) => scroll?.scrollTo(`#${href}`);
  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      drag
      dragElastic={0.3}
      dragConstraints={{ top: 10, bottom: 400 }} // Boundary Y Axis
      dragTransition={{
        power: 0.5, // Tentukan kekuatan momentum (semakin besar semakin jauh meluncur)
        timeConstant: 200, // Durasi momentum sebelum berhenti
        bounceStiffness: 100,
        bounceDamping: 10,
        modifyTarget: (target) => {
          const screenWidth = window.innerWidth;
          const menuWidth = 200;

          const leftBoundary = 0;
          const rightBoundary = screenWidth - menuWidth;

          // Boundary X Axis
          const clampedX = Math.max(
            leftBoundary,
            Math.min(target, rightBoundary),
          );

          return clampedX;
        },
      }}
      ref={ref}
      className="absolute left-1/2 top-1/2 z-50 flex items-center justify-center"
    >
      <ul className="relative z-20 flex h-16 w-16 items-center justify-center">
        <motion.li
          whileTap={{ rotate: 315 }}
          transition={{ duration: 0.5 }}
          className="absolute z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[0_0_10px_5px_#fff] backdrop-blur"
          onClick={handleToggleMenu}
        >
          {isOpen ? (
            <Plus color="white" size={32} className="rotate-45" />
          ) : (
            <AlignJustify color="white" size={32} />
          )}
        </motion.li>

        {menu.map((item, i) => {
          const angle = (360 / menu.length) * i;
          const x = 120 * Math.cos((angle * Math.PI) / 180);
          const y = 120 * Math.sin((angle * Math.PI) / 180);
          const colorClassName = `text-[${item.color}]`;

          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={
                isOpen
                  ? { opacity: 1, x, y, rotate: 45 }
                  : { opacity: 0, x: 0, y: 0, rotate: 45 }
              }
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group absolute z-0 flex h-14 w-14 cursor-pointer items-center justify-center rounded-md border backdrop-blur`}
              whileHover={{ backgroundColor: item.color }}
              style={{
                boxShadow: `0 0 10px 7px ${item.color}`,
                border: `${item.color}`,
              }}
              // onClick={() => handleOnClick(item.name)}
            >
              <item.icon
                className={`-rotate-45 group-hover:text-black ${colorClassName}`}
              />
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default ModernCircularMenu;
