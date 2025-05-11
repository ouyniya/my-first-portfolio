import { Button } from "@/components/Button";
import MoreProjects from "@/components/MoreProjects";
import { SectionHeader } from "@/components/SectionHeader";

function More() {
  return (
    <section id="more-project" className="pb-16 md:mt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Explore More Projects"
          title="Project Playground"
          description="A bunch of mini projects"
        />
        <div className="flex justify-center py-4 md:py-6 pb-12">
          <a href="https://github.com/ouyniya/">
            <Button>See more on GitHub</Button>
          </a>
        </div>
        <div className="mt-0 md:mt-10">
          <MoreProjects />
        </div>
      </div>
    </section>
  );
}

export default More;
