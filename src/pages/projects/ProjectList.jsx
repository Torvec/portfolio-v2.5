// TODO: Add props so that it can be sorted in different ways

import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
