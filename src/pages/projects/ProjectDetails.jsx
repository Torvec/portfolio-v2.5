import { useParams, Link } from "react-router-dom";
import projectsData from "./projectsData.json";
import PageHeader from "../../layout/components/PageHeader";

export default function ProjectDetails() {
  const { id } = useParams();
  const nextId = Number(id) + 1;
  const prevId = Number(id) - 1;
  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found!</div>; // TODO: Needs to throw an error that can be caught by the ErrorBoundary
  }

  return (
    <>
      <PageHeader>{project.title}</PageHeader>
      <section className="flex gap-10 bg-orange-500 p-2 lg:p-10">
        <div className="w-1/2">
          {project.image ? (
            <img
              src={`/assets/img/${project.image}`}
              alt={project.title}
              className="w-full border-2 border-stone-900"
            />
          ) : (
            <p className="flex h-96 w-full items-center justify-center bg-stone-300 font-bold">
              Image Not Available - Work In Progress
            </p>
          )}
        </div>
        <div className="w-1/2 border-2 border-stone-900 bg-stone-100 p-2 lg:p-10">
          <h2>Project Details</h2>
          <p>{project.description}</p>
          <p>{project.dateCompleted}</p>
          {/* Tech Stack */}
          {project.techStack.map((tech, techIndex) => (
            <span
              className="mb-1.5 mr-1.5 inline-block bg-stone-300 px-3 py-1.5 text-sm text-stone-600"
              key={techIndex}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
      {/* PROJECTS NAVIGATION */}
      <nav className="flex justify-center border-y-2 border-stone-500 bg-stone-200">
        <div className="flex border-x-2 border-stone-500 font-bold text-orange-500">
          {prevId < 1 ? null : (
            <Link
              to={`/projects/projectDetails/${prevId}`}
              className="border-r-2 border-stone-500 p-4 transition-all duration-300 ease-in-out hover:bg-stone-300 hover:px-6"
            >
              Prev
            </Link>
          )}
          <Link
            to="/projects"
            className="border-r-2 border-stone-500 p-4 transition-all duration-300 ease-in-out hover:bg-stone-300 hover:px-6"
          >
            All Projects
          </Link>
          {nextId > projectsData.length ? null : (
            <Link
              to={`/projects/projectDetails/${nextId}`}
              className="p-4 transition-all duration-300 ease-in-out hover:bg-stone-300 hover:px-6"
            >
              Next
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
