// Features:
// - Smooth magnetic movement on hover (desktop).
// - Works with finger drag (mobile).
// Snaps back to center when mouse/touch leaves.

"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, useRef, useState, MouseEvent, TouchEvent } from "react";

function Magnet({ children }: PropsWithChildren) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const updateOffset = (clientX: number, clientY: number) => {
    const rect = elementRef.current?.getBoundingClientRect();
    if (!rect) return;

    const deltaX = clientX - (rect.left + rect.width / 2);
    const deltaY = clientY - (rect.top + rect.height / 2);

    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updateOffset(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updateOffset(touch.clientX, touch.clientY);
    }
  };

  const resetOffset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetOffset}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetOffset}
      animate={offset}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default Magnet;
