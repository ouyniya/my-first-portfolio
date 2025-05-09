"use client";

import React, { JSX, useEffect, useState } from "react";

export const StarBg = ({isChecked}: {isChecked: boolean}) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numStars = 30;
    const generatedStars = Array.from({ length: numStars }, (_, i) => {
      const left = Math.floor(Math.random() * 100);
      const top = Math.floor(Math.random() * 100);
      const delay = (Math.random() * 5).toFixed(2);
      const size = Math.floor(Math.random() * 6) + 4;
      const color = [
        "fill-orange-300",
        "fill-secondary",
        "fill-orange-400/50",
        "fill-orange-400",
      ][Math.floor(Math.random() * 4)];

      return (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
          }}
        >
          <svg
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={`cf-icon-svg ${color}`}
          >
            <path d="m12.673 10.779.798 4.02c.221 1.11-.407 1.566-1.395 1.013L8.5 13.81l-3.576 2.002c-.988.553-1.616.097-1.395-1.013l.397-2.001.401-2.02-1.51-1.397-1.498-1.385c-.832-.769-.592-1.507.532-1.64l2.026-.24 2.044-.242 1.717-3.722c.474-1.028 1.25-1.028 1.724 0l1.717 3.722 2.044.242 2.026.24c1.124.133 1.364.871.533 1.64L14.184 9.38z"></path>
          </svg>
        </span>
      );
    });

    setStars(generatedStars);
  }, []);

  return isChecked || <div className="wrapper-container wrapper relative">{stars}</div>;
};
