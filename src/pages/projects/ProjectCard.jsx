import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="blackShadow flex max-w-full flex-col border-2 border-stone-900 bg-stone-100 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:bg-stone-200">
      <Link to={`/projects/projectDetails/${project.id}`}>
        {project.image ? (
          <img
            src={`/assets/img/${project.image}`}
            alt={project.title}
            className="h-96 w-full border-b-2 border-stone-900 object-cover"
          />
        ) : (
          <p className="flex h-96 w-full items-center justify-center border-b-2 border-stone-900 bg-stone-300 font-bold">
            Image Not Available - Work In Progress
          </p>
        )}
        <div className="p-5">
          <h4 className="text-2xl">{project.title}</h4>
          <p className="text-lg">
            {project.dateCompleted ? (
              <>
                {project.status} {project.dateCompleted}
              </>
            ) : (
              <>Under Development</>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    dateCompleted: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    repository: PropTypes.string,
    deployment: PropTypes.string,
  }).isRequired,
};
