import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";

const socialMedia = [
  {
    title: "GitHub",
    href: "https://github.com/ouyniya",
    icon: faGithub,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ouyniya",
    icon: faInstagram,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/niya-somkerd/",
    icon: faLinkedin,
  },
  {
    title: "Credly",
    href: "https://www.credly.com/users/niya-somkerd",
    icon: faCrown,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip flex flex-col gap-12">
      {/* social section */}
      <div>
        <div
          className="absolute h-[400px] w-screen bottom-0 left-1/2 -translate-x-1/2 bg-orange-300/25 -z-10"
          style={{
            maskImage:
              "radial-gradient(50% 50% at bottom center, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(50% 50% at bottom center, black, transparent)", // for Safari support
          }}
        ></div>
        <div className="container">
          <div className="w-full flex flex-row justify-between items-center">
            <div>
              <p className="font-semibold text-5xl uppercase">Thanks for</p>
              <p className="font-semibold text-5xl uppercase">visiting Me!</p>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <p className="pl-2 font-medium text-xl">Connect the Dots</p>
                <div className="flex gap-1">
                  {socialMedia.map((item, idx) => (
                    <a href={item.href} key={idx}>
                      <Tooltip text={item.title}>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-950 border border-primary hover:border hover:border-orange-500/10 hover:cursor-grab active:cursor-grabbing hover:text-orange-300 transition-all duration-500">
                          <FontAwesomeIcon icon={item.icon} size="lg" />
                        </button>
                      </Tooltip>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-xl">Contact Me</p>
                <p className="pb-1 pt-3 pr-2 border-b-1 border-b-orange-50 hover:border-b-orange-300 hover:cursor-pointer">
                  niya.somkerd@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text move to left section */}
      <div className="flex justify-between pb-2">
        <div className="flex flex-none gap-4 pr-4 animate-move [animation-duration:15s]">
          <p className="text-9xl opacity-85">
            <span className="font-medium bg-gradient-to-b from-orange-200 via-orange-100 to-white text-transparent bg-clip-text">
              Pixels Logic and a Bit of{" "}
            </span>
            <span className="font-medium bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 text-transparent bg-clip-text">
              Magic.
            </span>
          </p>
          <p className="text-9xl opacity-85">
            <span className="font-medium bg-gradient-to-b from-orange-200 via-orange-100 to-white text-transparent bg-clip-text">
              Pixels Logic and a Bit of{" "}
            </span>
            <span className="font-medium bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 text-transparent bg-clip-text">
              Magic.
            </span>
          </p>
        </div>
      </div>

      {/* copyright section */}
      <div className="container flex justify-between pb-2">
        <p className="text-sm opacity-65">©2025 NYSDEV, All Rights Reserved.</p>
        <p className="text-sm opacity-65">
          Turning caffeine into clean(ish) code since 2024.
        </p>
      </div>
    </footer>
  );
};
