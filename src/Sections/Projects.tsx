import project1 from "@/assets/images/project-1.jpg";
import project2 from "@/assets/images/project-2.jpeg";
import project3 from "@/assets/images/project-3.jpg";
import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { BrowserMockup } from "@/components/BrowserMockUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const portfolioProjects = [
  {
    company: "Personal project",
    year: "2024",
    title: "Smart Fund Select",
    results: [
      {
        title:
          "Filtering mutual funds based on specific criteria using real-world data from the SEC API.",
      },
      {
        title:
          "Recommending type of funds suitable for investors using AI and rule-based systems.",
      },
      { title: "Use JWT Authentication for user verification." },
    ],
    link: "https://www.youtube.com/watch?v=1XQmvn3KVcE",
    githubFrontEnd: "https://github.com/ouyniya/smart-fund-select-frontend",
    githubBackEnd: "https://github.com/ouyniya/smart-fund-select-backend",
    image: project1,
    stacks: [
      "React",
      "NodeJS",
      "MySQL",
      "Prisma",
      "Express",
      "ChartJS",
      "JWT",
      "Bcrypt",
      "Framer Motion",
      "Zustand",
      "SweetAlert2",
      "TailwindCSS",
      "DaisyUI",
    ],
    bullet: "💰",
  },
  {
    company: "Group Project (Product owner)",
    year: "2025",
    title: "Voyager",
    results: [
      {
        title:
          "Implemented post sharing system with support for multiple image uploads and embedded interactive map location.",
      },
      {
        title: "Integrated AI models for content moderation",
      },
      {
        title: "Developed Google OAuth and 2FA via OTP",
      },
    ],
    link: "https://www.canva.com/design/DAGioYkpRms/B6OK7V2-QJMzdWDRS5Pdtw/edit?utm_content=DAGioYkpRms&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    githubFrontEnd:
      "https://github.com/ouyniya/voyager-travel-experience-sharing-website-frontend",
    githubBackEnd:
      "https://github.com/ouyniya/voyager-travel-experience-sharing-website-backend",
    image: project3,
    stacks: [
      "React",
      "NodeJS",
      "MySQL",
      "Prisma",
      "Express",
      "ChartJS",
      "JWT",
      "Bcrypt",
      "Framer Motion",
      "Zustand",
      "SweetAlert2",
      "TailwindCSS",
      "DaisyUI",
      "TensorflowJS",
      "Google OAuth",
      "Leaflet",
      "NSFWJS",
      "Cloudinary",
      "Nodemailer",
      "Passport Google Oauth",
    ],
    bullet: "✈️",
  },
  {
    company: "Camping NextJS",
    year: "2025",
    title: "Camping NextJS",
    results: [
      { title: "Add landmarks to a personal wishlist" },
      { title: "Two-factor authentication (2FA) via email OTP" },
      {
        title:
          "User authentication via Google, Facebook, or email/password using Clerk",
      },
    ],
    link: "https://youtu.be/xbaHfSJIAQQ",
    githubFrontEnd: "https://github.com/ouyniya/nextjs15-camping-site",
    githubBackEnd: "https://github.com/ouyniya/nextjs15-camping-site",
    image: project2,
    stacks: [
      "NextJS",
      "Supabase",
      "Prisma",
      "Leaflet",
      "Clerk",
      "Zod",
      "Zustand",
      "SweetAlert2",
      "TailwindCSS",
      "Swiper",
    ],
    bullet: "⛺",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 md:mt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Built with code, coffee, and creativity ☕💻✨"
        />

        <div className="flex flex-col mt-10 md:mt-16 lg:mt-24 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-orange-300 to-orange-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-orange-400/10 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-orange-100/75"
                      >
                        <span>{project.bullet}</span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* mock up */}
                <div className="relative min-h-[350px]">
                  <BrowserMockup className="-mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none">
                    <Image src={project.image} alt={project.title} />
                  </BrowserMockup>

                  <div className="lg:absolute lg:top-[245px] w-full flex gap-5 mt-5">
                    <a href={project.githubFrontEnd} className="w-full">
                      <button className="w-full h-10 mt-4 bg-gradient-to-r from-orange-400 to-orange-300 hover:bg-primary text-orange-950 text-sm font-extrabold py-2 px-4 border tracking-tight rounded-xl uppercase shadow hover:cursor-pointer hover:scale-105 duration-300 flex gap-2 justify-center items-center border-b-4 border-amber-950/95">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                        GitHub
                      </button>
                    </a>
                    <a href={project.link} className="w-full">
                      <button className="w-full h-10 mt-4 bg-gradient-to-r from-orange-400/5 to-orange-300/10 hover:bg-primary text-orange-300 text-sm font-extrabold py-2 px-4 border-orange-300 border tracking-tight rounded-xl uppercase shadow hover:cursor-pointer hover:scale-105 duration-300 flex gap-2 justify-center items-center">
                        <FontAwesomeIcon icon={faLink} size="lg" />
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* tech stack */}
              <div className="flex flex-col mt-5 md:mt-8 lg:mt-2 mb-8 lg:mb-16">
                <div className="flex gap-2 flex-wrap opacity-75">
                  {project.stacks.map((stack, index) => (
                    <p
                      key={index}
                      className="outline px-1.5 py-0.5 text-xs rounded-md outline-orange-300/85 text-orange-300 hover:bg-orange-400 hover:text-gray-950 hover:outline-orange-400 hover:cursor-cell duration-300"
                    >
                      {stack}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
