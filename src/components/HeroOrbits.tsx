import { PropsWithChildren } from "react";

export const HeroOrbits = ({
  children,
  size,
  rotation,
  orbitDuration,
  paused,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  paused?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="animate-spin hover:cursor-pointer"
        style={{
          animationDuration: orbitDuration,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        <div
          className="items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
        <div
          className="items-start justify-start animate-spin inline-flex"
          style={{
            transform: `rotate(${rotation - 1}deg)`,
            animationDuration: '3s',
          }}
        >
          {children}
        </div>
        </div>
      </div>
    </div>
  );
};
