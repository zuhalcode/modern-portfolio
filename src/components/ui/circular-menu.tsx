import { motion } from "framer-motion";
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

const CircularMenu = ({ scroll }: { scroll: LocomotiveScroll | null }) => {
  const headerMenu = [
    { name: "hero", icon: Home },
    { name: "about", icon: User },
    { name: "gallery", icon: GalleryHorizontalEnd },
    { name: "toolbox", icon: Wrench },
    { name: "portfolio", icon: Laptop },
    { name: "experince", icon: BriefcaseBusiness },
    { name: "skill", icon: BicepsFlexed },
    { name: "contact", icon: Phone },
  ];

  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = (href: string) => scroll?.scrollTo(`#${href}`);
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
      className="absolute left-14 top-14 z-20 flex items-center justify-center"
    >
      <ul className="relative z-20 flex h-16 w-16 items-center justify-center">
        <motion.li
          whileTap={{ rotate: 315 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur"
          onClick={handleToggleMenu}
        >
          {isOpen ? (
            <Plus color="white" size={32} />
          ) : (
            <AlignJustify color="white" size={32} />
          )}
        </motion.li>

        {isOpen &&
          headerMenu.map((menu, i) => {
            const angle = (360 / headerMenu.length) * i;
            const x = 60 * Math.cos((angle * Math.PI) / 180);
            const y = 60 * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                exit={{ opacity: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute cursor-pointer"
                onClick={() => handleOnClick(menu.name)}
              >
                <menu.icon />
              </motion.li>
            );
          })}
      </ul>
    </motion.div>
  );
};

export default CircularMenu;
