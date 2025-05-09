"use client";

import { AboutSection } from "@/Sections/About";
import { Footer } from "@/Sections/Footer";
import { Hero } from "@/Sections/Hero";
import { Navbar } from "@/Sections/Navbar";
import { ProjectsSection } from "@/Sections/Projects";
import { TapeToRight } from "@/Sections/TapeToRight";
import { motion, useScroll } from "framer-motion";
import { StarBg } from "@/components/StarBg";
import { useState } from "react";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <ScrollToTopButton />
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 2,
          backgroundColor: "oklch(75% 0.183 55.934)",
          boxShadow: "0px 0px 2px 0px oklch(75% 0.183 55.934)",
          transformOrigin: "0%",
          zIndex: 10,
        }}
      ></motion.div>

      <Navbar isChecked={isChecked} setIsChecked={setIsChecked} />
      <StarBg isChecked={isChecked} />
      <Hero />
      <TapeToRight />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </>
  );
}
