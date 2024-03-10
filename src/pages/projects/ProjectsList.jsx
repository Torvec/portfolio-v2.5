import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  
  const reversedProjects = [...projectsData].reverse();
  
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {reversedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

/* CAROUSEL TEST */

//   <section className="flex flex-col items-center bg-orange-500 pt-20">
//   <h2 className="mb-10 text-4xl font-semibold uppercase md:text-6xl md:font-normal">
//     Carousel Test
//   </h2>
//   <div className="container m-auto mb-10 px-5 xl:px-0">
//     <EmblaCarousel />
//   </div>
//   <button className="mb-10 rounded-3xl border-2 border-stone-900 bg-stone-900 px-4 py-2 text-lg text-stone-50 transition-all duration-300 ease-in-out hover:rounded-full hover:border-stone-300 hover:bg-stone-700 hover:px-8">
//     <RouterLink to={"/portfolio"}>All Projects</RouterLink>
//   </button>
// </section>