import { useParams } from "react-router-dom";
import projectsData from "./projectsData.json";
import PageHeader from "../../layout/components/PageHeader";
import ProjectsNav from "./components/ProjectsNav";
import UpArrowIcon from "../../layout/assets/upArrowIcon.svg?react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));
  return (
    <>
      <PageHeader>{project.title}</PageHeader>
      <ProjectsNav />
        <section className="flex flex-col gap-5 bg-orange-500 p-5 lg:flex-row lg:gap-10 lg:p-10">
          {/* PROJECT IMAGES */}
          <div className="lg:w-1/2 border-2 border-stone-900">
            {project.image ? (
              <img
                src={`/assets/img/${project.image}`}
                alt={project.title}
                className="w-full"
              />
            ) : (
              <p className="flex h-96 w-full items-center justify-center bg-stone-300 font-bold">
                Image Not Available - Work In Progress
              </p>
            )}
          </div>
          {/* PROJECT DETAILS */}
          <div className="flex lg:w-1/2 flex-col gap-5 border-2 border-stone-900 bg-stone-100 p-5 lg:p-10">
            <p className="text-xl">{project.description}</p>
            <p className="text-center font-bold">
              {project.dateCompleted ? (
                <>
                  {project.status} {project.dateCompleted}
                </>
              ) : (
                <>Under Development</>
              )}
            </p>
            <div>
              {project.techStack.map((tech, techIndex) => (
                <span
                  className="mb-1.5 mr-1.5 inline-block bg-stone-300 px-3 py-1.5 text-sm text-stone-600"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* GITHUB REPO AND DEPLOYMENT */}
            <div className="flex flex-grow items-end justify-around gap-5 text-stone-900">
              <button className="text-md w-1/2 border-2 border-stone-900 py-2 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:text-orange-500">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  GitHub Repo
                  <UpArrowIcon className="h-4 w-4" />
                </a>
              </button>
              <button className="text-md w-1/2 border-2 border-stone-900 py-2 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:text-orange-500">
                <a
                  href={project.deployment}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Deployment
                  <UpArrowIcon className="h-4 w-4" />
                </a>
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
