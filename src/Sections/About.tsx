"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

import mapImage from "@/assets/images/map.png";
import profileImage from "@/assets/images/me-bg.png";

import {
  faAngular,
  faCss3,
  faGithub,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Tape } from "@/components/Tape";
import DecayCard from "@/components/DecayEffect";
import CardWithAnimate from "@/components/CardWithAnimate";

// ===================== Constants =====================

const TOOLBOX_ITEMS = [
  { title: "JavaScript", iconType: faJs},
  { title: "CSS3", iconType: faCss3 },
  { title: "React", iconType: faReact},
  { title: "GitHub", iconType: faGithub },
  { title: "NodeJS", iconType: faNodeJs },
  { title: "Angular", iconType: faAngular },
  { title: "Prisma", iconType: faDatabase },
  { title: "MySQL", iconType: faDatabase},
  { title: "MongoDB", iconType: faDatabase },
  { title: "TypeScript", iconType: faJs },
];

const HOBBIES = [
  { title: "Music", emoji: "🎧", left: "5%", top: "5%" },
  { title: "Reading", emoji: "📚", left: "50%", top: "5%" },
  { title: "Gardening", emoji: "🌲", left: "10%", top: "35%" },
  { title: "Traveling", emoji: "✈️", left: "55%", top: "25%" },
  { title: "Drawing", emoji: "🎨", left: "48%", top: "50%" },
  { title: "Watching Anime", emoji: "🍥", left: "10%", top: "72%" },
];

// ===================== Components =====================

const ToolboxList = () => (
  <>
    <ToolboxItems
      items={TOOLBOX_ITEMS}
      className="mt-6"
      itemsWrapperClassName="animate-move-left [animation-duration:30s]"
    />
    <ToolboxItems
      items={TOOLBOX_ITEMS}
      className="mt-4"
      itemsWrapperClassName="animate-move-right [animation-duration:30s]"
    />
    <div className="mt-2">
      <Tape />
    </div>
  </>
);

const HobbyTags = ({
  constrainRef,
}: {
  constrainRef: React.RefObject<HTMLDivElement>;
}) => (
  <div className="relative flex-1" ref={constrainRef}>
    {HOBBIES.map(({ title, emoji, left, top }) => (
      <motion.div
        key={title}
        className="inline-flex items-center gap-2 px-6 py-1.5 absolute cursor-grab rounded-full bg-gradient-to-r from-orange-300 to-orange-400"
        style={{ left, top }}
        drag
        dragConstraints={constrainRef}
      >
        <span className="font-medium text-gray-950">{title}</span>
        <span>{emoji}</span>
      </motion.div>
    ))}
  </div>
);

// ===================== Main =====================

export const AboutSection = () => {
  const constrainRef = useRef<HTMLDivElement>(null!);

  return (
    <section id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Who I Really Am"
          title="This Is Me"
          description="Get to know the developer behind the screen."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Toolbox & Reads */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="p-6 h-[320px] md:col-span-2 cute-cursor
            bg-radial-[at_100%_0%] from-[#844e29] via-primary via-25% to-primary to-90%
            ">
              <CardHeader
                title="My Github"
                description="My code speaks louder—find it on GitHub."
              />
              <div className="w-40 mx-auto mt-8">
                <a href="https://github.com/ouyniya">
                <DecayCard image="/me-bg.png" width={340} />

                </a>
              </div>
            </Card>

            <Card className="p-0 h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="The stack behind the screen I use to build fast, modern web apps."
                className="px-6 pt-6"
              />
              <ToolboxList />
            </Card>
          </div>


          {/* success */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
            <Card className="p-6 max-h-max md:col-span-6
            bg-radial-[at_75%_0%] from-primary via-primary via-65% to-[#844e29] to-100%
            ">
              <CardHeader
                title="Achievements"
                description="A few highlights I’m proud of—milestones, certifications, and moments when the hard work paid off."
              />
              <div className="w-full mx-auto mt-8">
              <CardWithAnimate />
              </div>
            </Card>
          </div>

          {/* Hobbies & Map */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="p-0 h-[320px] flex flex-col md:col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the code"
                className="px-6 py-6"
              />
              <HobbyTags constrainRef={constrainRef} />
            </Card>

            <Card className="p-0 h-[320px] relative md:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover object-center-top"
              />
              <div className="absolute top-1/2 left-1/2 size-15 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:-outline-2 after:rounded-full after:outline-2 after:outline-orange-600/10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 -z-10" />
                <div className="overflow-hidden size-15 rounded-full relative">
                <Image src={profileImage} alt="smile" className="size-15 absolute top-1.5" />
                  </div> 
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
