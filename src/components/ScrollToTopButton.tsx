"use client";

import {
  useAnimationControls,
  useScroll,
  Variants,
  motion,
} from "framer-motion";
import { useEffect } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  }, [scrollYProgress, controls]); // <-- Important to include dependencies

  return (
    <motion.button
      className="fixed w-10 h-10 bottom-5 right-5 rounded-full bg-orange-400 text-orange-400 shadow-lg z-50 hover:cursor-pointer"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="up-circle"
        className="icon glyph fill-primary"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,11.71a1,1,0,0,1-1.42,0L12,11.41l-2.29,2.3a1,1,0,0,1-1.42-1.42l3-3a1,1,0,0,1,1.42,0l3,3A1,1,0,0,1,15.71,13.71Z"></path>
        </g>
      </svg>
    </motion.button>
  );
};
