"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What tech stack do you use?",
    answer: (
      <>
        I primarily work with <strong>React</strong>, <strong>Next.js</strong>,{" "}
        <strong>Node.js</strong>, <strong>Express</strong>,{" "}
        <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>,{" "}
        <strong>MySQL</strong>, <strong>MongoDB</strong>, and{" "}
        <strong>Prisma</strong>. {"I'm also currently learning"}{" "}
        <strong>Angular</strong> and have a solid understanding of its basics.
      </>
    ),
  },
  {
    question: "Do you have real-world or hands-on development experience?",
    answer: (
      <>
        Yes. I completed a 4-month hands-on training program at Codemap, followed by a 3-month IBM Full Stack Software Developer certification. Alongside that, I’ve been consistently practicing and building projects on my own to strengthen my skills. While this is not industry work, it has given me solid practical experience across the full development cycle — from frontend to backend — using real tools and technologies. <br /><br />

        Check out the{" "}
        <a
          href="#project"
          className="text-orange-300 underline hover:text-orange-400"
        >
          Projects
        </a>{" "}
        section or visit my{" "}
        <a
          href="https://github.com/ouyniya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 underline hover:text-orange-400"
        >
          GitHub
        </a> {" "}
        for a more in-depth look at my code.
      </>
    ),
  },

  {
    question: "Are you available for work?",
    answer: (
      <>
        {"Yes, I'm currently open to the opportunities. Feel free to"}{" "}
        <a
          href="#contact"
          className="text-orange-300 underline hover:text-orange-400"
        >
          reach out via the email
        </a>
        , and I’ll get back to you shortly.
      </>
    ),
  },
  {
    question: "Do you write technical blogs?",
    answer: (
      <>
        I do. You can read my articles on{" "}
        <a
          href="https://roadtodev-th.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 underline hover:text-orange-400"
        
        >
          Blogger
        </a>.
      </>
    ),
  },
  {
    question: "What are you currently learning?",
    answer: (
      <>
        {"I'm currently learning about Data Structures with a focus on Big O notation to improve my problem-solving skills and coding efficiency. I’m passionate about understanding the underlying complexities of algorithms and optimizing my code."}
      </>
    ),
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto px-4 py-12 mt-16">
      <div className="container flex flex-col gap-16">
        <div>
          <SectionHeader
            eyebrow="FAQs about how I work and what I do."
            title="Frequently asked questions"
            description="Because even devs come with their own documentation."
          />
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-300/18 rounded-xl transition-shadow hover:shadow-md bg-gradient-to-r from-primary via-orange-400/5 to-primary"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-semibold text-lg text-secondary hover:cursor-pointer">
                  {faq.question}
                </span>
                <span className="text-orange-300 hover:cursor-pointer">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-4 text-secondary/65"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
