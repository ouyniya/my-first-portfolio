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
        <div className="flex justify-center py-6 pb-12">

        <Button>See more on GitHub</Button>

        </div>
        <div className="mt-10">
          <MoreProjects />
        </div>
      </div>
    </section>
  );
}

export default More;
