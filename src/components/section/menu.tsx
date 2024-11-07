import {
  animate,
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
} from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import {
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

const Menu = ({ scroll }: { scroll: LocomotiveScroll | null }) => {
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
  const [isDraggable, setIsDraggable] = useState<boolean>(true); // Kontrol drag

  const handleOnClick = (href: string) => scroll?.scrollTo(`#${href}`);
  const handleToggleMenu = () => setIsOpen(!isOpen);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      drag
      dragElastic={0.3}
      dragConstraints={{ top: 10, bottom: 400 }}
      dragTransition={{
        power: 0.5, // Tentukan kekuatan momentum (semakin besar semakin jauh meluncur)
        timeConstant: 200, // Durasi momentum sebelum berhenti
        bounceStiffness: 100,
        bounceDamping: 10,
        modifyTarget: (target) => {
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const menuWidth = 200;
          const menuHeight = 200;

          const leftBoundary = 0;
          const rightBoundary = screenWidth - menuWidth;
          const topBoundary = 0;
          const bottomBoundary = screenHeight - menuHeight;

          // Pembatasan untuk x (horizontal)
          const clampedX = Math.max(
            leftBoundary,
            Math.min(target, rightBoundary),
          );

          // Pembatasan untuk y (vertikal) setelah membatasi x
          const clampedY = Math.max(
            topBoundary,
            Math.min(y.get(), bottomBoundary),
          );

          return clampedX; // Atau `clampedY` jika ingin membatasi sumbu vertikal terlebih dahulu
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
          <Plus color="white" size={32} />
        </motion.li>

        <AnimatePresence>
          {isOpen &&
            headerMenu.map((menu, i) => {
              const angle = (360 / headerMenu.length) * i;
              const x = 60 * Math.cos((angle * Math.PI) / 180); // Adjust distance
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
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default Menu;
