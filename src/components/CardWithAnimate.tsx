import {
  faCircleDot,
  faComment,
  faGift,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardWithAnimate = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="IBM Full Stack"
          subtitle="Software Developer Professional Certificate"
          href="https://coursera.org/share/f5f78e51d9084337deff2f5aaf25f827"
          Icon={faStar}
        />
        <Card
          title="Software Park"
          subtitle="Fullstack JavaScript Web Developer Codecamp"
          href="https://getcodecamp.com/"
          Icon={faCircleDot}
        />
        <Card title="Badge" subtitle="My verified skills and accomplishments on Credly." href="https://www.credly.com/users/niya-somkerd" Icon={faGift} />
        <Card
          title="Projects"
          subtitle="through the chaos, the coffee, and the countless commits"
          href="https://github.com/ouyniya"
          Icon={faComment}
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded-[18px] border-[1px] border-orange-300/85 relative overflow-hidden group bg-orange-100"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <FontAwesomeIcon
        icon={Icon}
        size="md"
        className="absolute z-10 -top-19 -right-11 text-9xl text-orange-400/45 ge- group-hover:text-orange-900/50 group-hover:rotate-12 transition-transform duration-300"
      />

      {/* <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
      <h3 className="font-medium text-lg font-serif text-slate-950 group-hover:text-orange-950 relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-orange-900 group-hover:text-orange-800 relative z-10 duration-300 text-sm">
        {subtitle}
      </p>
    </a>
  );
};

export default CardWithAnimate;
