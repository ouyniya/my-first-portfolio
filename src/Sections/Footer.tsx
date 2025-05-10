import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../components/Tooltip";
import { EmailInput } from "../components/EmailInput";

const socialMedia = [
  {
    title: "GitHub",
    href: "https://github.com/ouyniya",
    icon: faGithub,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574003675710",
    icon: faFacebook,
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
    <footer id="contact" className="relative overflow-x-clip flex flex-col gap-12 mt-24 md:mt-32 cute-cursor">
      {/* social section */}
      <div>
        <div
          className="absolute h-[400px] w-screen bottom-0 left-1/2 -translate-x-1/2 bg-orange-300/10 -z-10"
          style={{
            maskImage:
              "radial-gradient(50% 50% at bottom center, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(50% 50% at bottom center, black, transparent)", // for Safari support
          }}
        ></div>
        <div className="container">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center select-none">
            <div className="text-2xl md:text-4xl lg:text-5xl flex lg:flex-col mb-18 md:mb-8 lg:mb-0">
              <p className="font-semibold uppercase">
                
                <span className="text-orange-300">
                  
                  Thanks {" "}
                  </span>
                  
                  for</p>
              <p className="font-semibold uppercase">visiting Me!</p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-16">
              <div className="flex flex-col gap-2">
                <p className="pl-2 font-medium text-xl">Connect the Dots</p>
                <div className="flex gap-1">
                  {socialMedia.map((item, idx) => (
                    <a href={item.href} key={idx}>
                      <Tooltip text={item.title}>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-950 border border-primary/0 hover:border hover:border-orange-500/10 hover:cursor-grab active:cursor-grabbing hover:text-orange-300 transition-all duration-500">
                          <FontAwesomeIcon icon={item.icon} size="lg" />
                        </button>
                      </Tooltip>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start my-10 md:my-0">
                <p className="font-medium text-xl ">Contact Me</p>
                <EmailInput text="ouyniya@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text move to left section */}
      {/* <div className="flex justify-between pb-2 cute-cursor select-none">
        <div className="flex flex-none gap-4 pr-8 animate-move [animation-duration:15s]">
          <p className="text-5xl md:text-7xl lg:text-9xl opacity-85">
            <span className="font-medium bg-gradient-to-b from-orange-200 via-orange-100 to-white text-transparent bg-clip-text">
              Pixels, Logic and a Bit of{" "}
            </span>
            <span className="font-medium bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 text-transparent bg-clip-text">
              Magic.
            </span>
          </p>
          <p className="text-5xl md:text-7xl lg:text-9xl opacity-85">
            <span className="font-medium bg-gradient-to-b from-orange-200 via-orange-100 to-white text-transparent bg-clip-text">
              Pixels, Logic and a Bit of{" "}
            </span>
            <span className="font-medium bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 text-transparent bg-clip-text">
              Magic.
            </span>
          </p>
        </div>
      </div> */}

      {/* copyright section */}
      <div className="container flex flex-col md:flex-row items-center md:justify-between pb-2">
        <p className="text-xs md:text-sm opacity-65 md:px-4 lg:px-0">
          ©2025 NYSDEV, All Rights Reserved.
        </p>
        <p className="text-xs md:text-sm opacity-65">
          Turning caffeine into clean(ish) code since 2024.
        </p>
      </div>
    </footer>
  );
};
