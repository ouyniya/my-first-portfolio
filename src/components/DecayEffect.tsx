import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: React.ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
  width = 200,
  height,
  image,
  children,
}) => {
//   const svgRef = useRef<SVGFEImageElement | null>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateZ = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const smoothRotate = useSpring(rotateZ, { stiffness: 100, damping: 20 });

  const cursor = useRef({ x: 0, y: 0 });
  const cachedCursor = useRef({ x: 0, y: 0 });
  const displacementScale = useRef(0);

  useEffect(() => {
    const map = (x: number, a: number, b: number, c: number, d: number) =>
      ((x - a) * (d - c)) / (b - a) + c;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
    const distance = (x1: number, x2: number, y1: number, y2: number) =>
      Math.hypot(x1 - x2, y1 - y2);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
    };

    const render = () => {
      const win = {
        w: window.innerWidth,
        h: window.innerHeight,
      };

      let tx = map(cursor.current.x, 0, win.w, -120, 120);
      let ty = map(cursor.current.y, 0, win.h, -120, 120);
      const rz = map(cursor.current.x, 0, win.w, -10, 10);

      // elastic bounds
      const bound = 50;
      if (tx > bound) tx = bound + (tx - bound) * 0.2;
      if (tx < -bound) tx = -bound + (tx + bound) * 0.2;
      if (ty > bound) ty = bound + (ty - bound) * 0.2;
      if (ty < -bound) ty = -bound + (ty + bound) * 0.2;

      x.set(tx);
      y.set(ty);
      rotateZ.set(rz);

      const cursorDist = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      displacementScale.current = lerp(
        displacementScale.current,
        map(cursorDist, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        displacementMapRef.current.setAttribute(
          "scale",
          displacementScale.current.toString()
        );
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y, rotateZ]);

  return (
    <motion.div
      style={{
        width,
        height,
        x: smoothX,
        y: smoothY,
        rotateZ: smoothRotate,
      }}
      className="relative"
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
      >
        <g>
          <image
            href={image}
            x="0"
            y="0"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </motion.div>
  );
};

export default DecayCard;
