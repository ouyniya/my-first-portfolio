// draggable skill list with toggle

"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  faNodeJs,
  faGithub,
  faReact,
  faAngular,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SkillBubble } from "./SkillBubble";

const skills = [
  { title: "NodeJS", icon: faNodeJs },
  { title: "React", icon: faReact },
  { title: "GitHub", icon: faGithub },
  { title: "MySQL", icon: faDatabase },
  { title: "Angular", icon: faAngular },
  { title: "Docker", icon: faDocker },
];

export const HeroSkills = () => {
  const [showAll, setShowAll] = useState(false);
  const constrainRef = useRef(null);

  const visibleSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <div
      ref={constrainRef}
      className="flex flex-col gap-4 absolute z-20 top-1/4"
    >
      <AnimatePresence>
        {visibleSkills.map((item, index) => (
          <SkillBubble
            key={item.title}
            icon={item.icon}
            index={index}
            constrainRef={constrainRef}
          />
        ))}
      </AnimatePresence>
      <motion.button
        layout
        onClick={() => setShowAll(!showAll)}
        className="w-12 h-12 hover:cursor-pointer bg-gradient-to-br from-orange-300/25 to-orange-500/50 rounded-full text-orange-300 font-bold"
      >
        {showAll ? "↑" : "↓"}
      </motion.button>
    </div>
  );
};
