'use client';

import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
  };

const sentenceVariants: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0 },
  },
};

interface TypewriterProps {
  text: string;
  repeatDelay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, repeatDelay = 2000 }) => {
  const [loop, setLoop] = useState(0);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted) return;

    const duration = text.length * 50 + repeatDelay;
    const timeout = setTimeout(() => {
      setLoop((prev) => prev + 1);
    }, duration);

    return () => clearTimeout(timeout);
  }, [loop, hasMounted, text, repeatDelay]);

  // Only render on client
  if (!hasMounted) return null;

  return (
    <motion.p
      key={loop}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
      className="tracking-wider"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
