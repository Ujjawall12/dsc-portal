// Features Projects

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function SectionTwo() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <SectionHeading
        title={"FEATURED PROJECTS"}
        description={
          "Explore some of the projects that we have been working on."
        }
      />
      <div
        className="flex flex-col items-center gap-4 p-6"
        id="project-card-container"
      >
        <ProjectCard />
      </div>
    </div>
  );
}
