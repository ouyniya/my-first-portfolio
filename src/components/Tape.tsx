import { Fragment } from "react";

const words = [
  "Express.js",
  "Prisma",
  "Leaflet",
  "ChartJS",
  "React Router",
  "Tailwind CSS",
  "Zustand",
  "Framer Motion",
  "Zod",
  "Multer",
  "Cloudinary",
  "nodemailer",
  "TensorFlow.js",
  "axios",
  "bcrypt",
  "PostgreSQL",
  "JWT",
];

export const Tape = () => {
  return (
    <div className="pt-3 overflow-x-clip relative">
      {/* right */}
      <div className="bg-gradient-to-r from-orange-400/85 via-orange-300 to-orange-400/85  -mx-1 shadow-xl shadow-orange-300/5">
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex flex-none gap-4 pr-4 py-2 animate-move-left [animation-duration:35s]">
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
    </div>
  );
};
