// handles draggable skill icons

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import { RefObject } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillBubbleProps {
  icon: IconDefinition;
  index: number;
  constrainRef: RefObject<HTMLDivElement>;
}

export const SkillBubble = ({ icon, index, constrainRef }: SkillBubbleProps) => {
  return (
    <motion.div
      key={icon.iconName + index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className={twMerge(
        "flex w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary/50 via-orange-300 to-secondary/70 backdrop-blur-[20px] shadow-amber-950/50 shadow-md border border-orange-100/85 hover:cursor-cell"
      )}
      drag
      dragConstraints={constrainRef}
    >
      <FontAwesomeIcon icon={icon} size="xl" className="text-orange-950" />
    </motion.div>
  );
};
