import ProjectsList from "../projects/ProjectsList";

function ProjectsSection() {
  return (
    <section className="flex flex-col items-center bg-orange-500 p-10">
      <h2 className="mb-10 text-4xl font-bold md:text-6xl">Latest Projects</h2>
      <ProjectsList />
    </section>
  );
}

export default ProjectsSection;
