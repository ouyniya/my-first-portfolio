import grainImage from "@/assets/images/grain.jpg";
import me from "@/assets/images/me-bg.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="py-28 md:py-32 lg:py-48 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div
          className="absolute h-[400px] w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[87%] bg-orange-500/15 -z-10 rounded-full"
          style={{
            maskImage:
              "radial-gradient(50% 50% at center center, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(50% 50% at center center, black, transparent)", // for Safari support
          }}
        ></div>

        <div className="size-[780px] hero-ring"></div>
        <div className="size-[1000px] hero-ring"></div>
        <div className="size-[1210px] hero-ring"></div>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src={me} alt="me" className="w-[220px]" />
          </div>
          <div className="bg-gray-950 border border-orange-950/50 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-orange-500 size-2.5 rounded-full relative">
              <div className="bg-orange-500 rounded-full absolute animate-ping inset-0"></div>
            </div>
            <div className="text-sm">Available for new projects.</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-6xl text-center mt-8 tracking-wide">
            Hello, World.
          </h1>
          <h1 className="font-serif text-3xl md:text-6xl text-center tracking-wide">
            {"I'm Niya"}
          </h1>
          <p className="mt-7 text-center text-white/60 md:text-lg">
            Full stack developer crafting clean, fast, and user-friendly web
            apps. Check out my latest projects below.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-9 gap-4">

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
