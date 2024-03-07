import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import projectsData from "./projectsData.json";
import PageHeader from "../../layout/components/PageHeader";
import UpArrowIcon from "../../layout/assets/upArrowIcon.svg?react";

export default function ProjectDetails() {
  const { id } = useParams();
  const nextId = Number(id) + 1;
  const prevId = Number(id) - 1;
  const firstId = 1;
  const lastId = projectsData.length;
  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found!</div>; // TODO: Needs to throw an error that can be caught by the ErrorBoundary
  }

  function ProjectNavLink({ to, children, borderRight = false }) {
    return (
      <Link
        to={to}
        className={`${
          borderRight ? "border-r-2 border-stone-900" : ""
        } p-4 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:px-6 hover:text-stone-900`}
      >
        {children}
      </Link>
    );
  }

  ProjectNavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    borderRight: PropTypes.bool,
  };

  return (
    <>
      <PageHeader>{project.title}</PageHeader>
      <nav className="flex justify-center border-b-2 border-stone-900 bg-stone-100">
        <div className="flex border-x-2 border-stone-900 font-bold text-orange-500">
          {prevId < 1 ? (
            <ProjectNavLink
              to={`/projects/projectDetails/${lastId}`}
              borderRight
            >
              Last
            </ProjectNavLink>
          ) : (
            <ProjectNavLink
              to={`/projects/projectDetails/${prevId}`}
              borderRight
            >
              Prev
            </ProjectNavLink>
          )}
          <ProjectNavLink to="/projects" borderRight>
            All Projects
          </ProjectNavLink>
          {nextId > projectsData.length ? (
            <ProjectNavLink to={`/projects/projectDetails/${firstId}`}>
              First
            </ProjectNavLink>
          ) : (
            <ProjectNavLink to={`/projects/projectDetails/${nextId}`}>
              Next
            </ProjectNavLink>
          )}
        </div>
      </nav>
      <section className="grid grid-cols-1 lg:gap-10 bg-orange-500 p-5 lg:grid-cols-2 lg:p-10">
        {/* PROJECT IMAGES */}
        <div>
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
        {/* PROJECT DETAILS */}
        <div className="border-2 border-stone-900 bg-stone-100 p-5 lg:p-10">
          <p className="mb-5 text-xl">{project.description}</p>
          <p className="mb-5 text-center font-bold">
            {project.dateCompleted ? (
              <>
                {project.status} {project.dateCompleted}
              </>
            ) : (
              <>Under Development</>
            )}
          </p>
          <div className="mb-5">
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
          <div className="flex justify-around gap-5 text-stone-900">
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
      {/* PROJECTS NAVIGATION */}
    </>
  );
}
