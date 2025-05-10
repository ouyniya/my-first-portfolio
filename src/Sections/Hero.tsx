"use client";

import Image from "next/image";
import { HeroOrbits } from "../components/HeroOrbits";
import { Button } from "../components/Button";
import grainTexture from "@/assets/images/grain.jpg";
import profileImage from "@/assets/images/me-bg.png";
import { Typewriter } from "@/components/TypeWriter";

// ===================== Components =====================

const HeroDecor = () => (
  <>
    <HeroOrbits size={209} rotation={69} orbitDuration="8s" paused>
      <span className="text-orange-300/50 text-shadow-amber-200/50 text-shadow-sm">
        ⋆
      </span>
    </HeroOrbits>
    <HeroOrbits size={215} rotation={75} orbitDuration="8s" paused>
      <span className="text-orange-300/50 text-shadow-amber-200/50 text-shadow-sm">
        ✦
      </span>
    </HeroOrbits>

    {/* Grain & Radial Lighting */}
    <div
      className="absolute inset-0 -z-30"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 25%, transparent, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 25%, transparent, transparent)",
      }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-7"
        style={{ backgroundImage: `url(${grainTexture.src})` }}
      />
      <div
        className="absolute h-[700px] w-[700px] top-[72%] left-1/2 -translate-x-1/2 -translate-y-[87%] bg-primary -z-15 rounded-full"
        style={{
          maskImage:
            "radial-gradient(50% 50% at center center, black, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at center center, black, black, transparent)",
        }}
      />
      <div
        className="absolute h-[700px] w-[700px] top-[72%] left-1/2 -translate-x-1/2 -translate-y-[87%] bg-primary -z-15 rounded-full"
        style={{
          maskImage:
            "radial-gradient(50% 50% at center center, black, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at center center, black, black, transparent)",
        }}
      />
      <div className="size-[460px] hero-ring-stronger" />
      <div className="size-[560px] hero-ring-strong" />
      <div className="size-[660px] hero-ring-strong" />
    </div>
  </>
);

const HeroText = () => (
  <div className="container flex flex-col items-center cute-cursor">
    <Image src={profileImage} alt="My profile" className="w-[120px] pt-20" />
    <div className="bg-gray-950 border border-orange-500/25 px-2 py-1 rounded-xl text-xs h-7 w-31 flex items-center justify-center gap-2">
      👋
      <Typewriter text="Hello, world!" />
    </div>

    <div className="max-w-lg mx-auto flax flex-col">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-8 tracking-wide text-shadow-lg text-shadow-gray-950/25">
        {`You’ve arrived at`}
      </h1>
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-2 tracking-wide text-shadow-lg text-shadow-gray-950/25">
        <span className="text-orange-300 hover:text-shadow-orange-400/25 hover:text-shadow-lg hover:tracking-wider cursor-pointer duration-300">
          <span className="animate-pulse">〈</span> Port: Niya{" "}
          <span className="animate-pulse">〉</span>
        </span>
      </h1>
      <p className="max-w-md mx-auto mt-4 md:mt-6 text-center text-secondary/70 text-base md:text-lg">
        {
          "I'm a full-stack developer who loves crafting clean, speedy, and user-friendly web apps."
        }
      </p>
    </div>

    <div className="mt-3 md:mt-6">
      <a href="#project">
        <Button>See my works</Button>
      </a>
    </div>
  </div>
);

// ===================== Main =====================

export const Hero = () => {
  return (
    <section
      id="hero"
      className="py-10 md:py-18 lg:py-20 relative z-0 overflow-x-clip select-none"
    >
      {/* Decorative Elements */}
      <HeroDecor />

      {/* Hero Text and Image */}
      <HeroText />
    </section>
  );
};
