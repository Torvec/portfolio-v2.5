import { Link, useParams } from "react-router-dom";
import projectsData from "../projectsData.json";
import PropTypes from "prop-types";

export default function ProjectsNav() {
    const { id } = useParams();
    const nextId = Number(id) + 1;
    const prevId = Number(id) - 1;
    const firstId = 1;
    const lastId = projectsData.length;
    
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
    <nav className="flex justify-center border-b-2 border-stone-900 bg-stone-100">
      <div className="flex border-x-2 border-stone-900 font-bold text-orange-500">
        {prevId < 1 ? (
          <ProjectNavLink to={`/projects/projectDetails/${lastId}`} borderRight>
            Last
          </ProjectNavLink>
        ) : (
          <ProjectNavLink to={`/projects/projectDetails/${prevId}`} borderRight>
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
  );
}
