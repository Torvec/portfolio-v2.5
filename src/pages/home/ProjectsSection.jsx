import ProjectsList from "../projects/ProjectsList";

function ProjectsSection() {
  return (
    <section className="flex flex-col items-center border-t-2 border-stone-500 bg-orange-500 pt-20">
      <h2 className="mb-10 text-4xl font-bold md:text-6xl">Latest Projects</h2>
      <div className="p-6 lg:p-10">
        <ProjectsList />
      </div>
    </section>
  );
}

export default ProjectsSection;
