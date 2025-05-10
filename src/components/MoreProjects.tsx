import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const imageList = [
  {
    id: 1,
    src: "/p-angular.png",
    link: "https://ouyniya.github.io/angular-easy-tasks/"
  },
  {
    id: 2,
    src: "/p-plant.jpg",
    link: "https://ouyniya.github.io/e-plantShopping/"
  },
  {
    id: 3,
    src: "/p-stock.png",
    link: "https://github.com/ouyniya/stock-performance-calculation"

  },
  {
    id: 4,
    src: "/p-game.png",
    link: "https://github.com/ouyniya/voyager_odyssey-game"

  },
  {
    id: 5,
    src: "/p-port.png",
    link: "https://github.com/ouyniya/my-first-portfolio"

  },
  {
    id: 6,
    src: "/p-fakebook.png",
    link: "https://github.com/ouyniya/fakebook_workshop_backend"

  },
  {
    id: 7,
    src: "/project-1.jpg",
    link: "https://github.com/ouyniya/smart-fund-select-frontend"

  },
  {
    id: 8,
    src: "/project-2.jpeg",
    link: "https://github.com/ouyniya/nextjs15-camping-site"

  },
  {
    id: 9,
    src: "/project-3.jpg",
    link: "https://github.com/ouyniya/voyager-travel-experience-sharing-website-frontend"

  },
  {
    id: 10,
    src: "/p-css1.png",
    link: "https://github.com/ouyniya/cc19-homework04"

  },
  {
    id: 11,
    src: "/p-css2.png",
    link: "https://github.com/ouyniya/cc19-homework05"

  },
  {
    id: 12,
    src: "/p-about.png",
    link: "https://github.com/ouyniya/ouyniya"

  },
  {
    id: 13,
    src: "/p-undercon.png",
    link: "https://github.com/ouyniya/under-construction-page"

  },
  {
    id: 14,
    src: "/p-todo.png",
    link: "https://github.com/ouyniya/todo-list-react-project"

  },
  {
    id: 15,
    src: "/p-python.png",
    link: "https://github.com/ouyniya/django-real-time-chat-website"

  },
  {
    id: 16,
    src: "/p-python2.png",
    link: "https://github.com/ouyniya/django-real-time-chat-website"

  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const ImageGrid = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [shuffledImages, setShuffledImages] = useState<typeof imageList>([]);

  useEffect(() => {
    // Only run on client
    updateImages();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const updateImages = () => {
    setShuffledImages(shuffleArray(imageList));
    timerRef.current = setTimeout(updateImages, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[500px] md:h-[700px] gap-1">
      {shuffledImages.map((img) => (
        <a href={img.link} key={img.id}>
      <motion.div
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="relative w-full h-full rounded-lg overflow-hidden group"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Amber blur overlay */}
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer" />

        {/* Text on hover */}
        <span className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer">
        <div className="flex justify-center items-center w-full text-xs md:text-base">
        👉 GitHub
        </div>
        </span>
      </motion.div>
    </a>
      ))}
    </div>
  );
};

const MoreProjects = () => {
  return (
    <section className="w-full px-8 pb-20 grid grid-cols-1 md:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">
      <ImageGrid />
    </section>
  );
};

export default MoreProjects;
