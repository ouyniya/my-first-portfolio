import { Fragment } from "react";

const words = [
  "Performance",
  "Accessible",
  "Reliable",
  "Intuitive",
  "Seamless",
  "Modern",
  "Clean",
  "Customizable",
  "Modular",
  "Responsive",
  "Scalable",
  "Flexible",
  "Efficient",
  "Elegant",
  "Robust",
  "Secure",
  "Lightweight",
  "Fast",
  "Smart",
  "Dynamic",
  "Maintainable",
  "Versatile",
  "User-friendly",
  "Interactive",
  "Innovative",
  "Consistent",
  "Minimal",
  "Polished",
];

export const TapeToRight = () => {
  return (
    <div className="py-16 md:py-16 lg:py-15 overflow-x-clip relative">
      {/* right */}
      <div className="bg-gradient-to-r from-orange-400/85 via-orange-300 to-orange-400/85 -rotate-3 -mx-1 shadow-xl shadow-orange-300/5">
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:35s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    ⭐
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* left */}
      <div className="absolute top-16/12 -z-10 bg-gradient-to-r from-gray-950/75 via-orange-950/85 to-orange-900/85 rotate-4 -mx-1">
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex flex-none gap-4 pr-4 py-2 animate-move-right [animation-duration:35s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-orange-200 uppercase font-extrabold text-xs">
                      {word}
                    </span>
                    <span className="text-xs">⭐</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
