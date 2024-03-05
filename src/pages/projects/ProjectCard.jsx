import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="blackShadow flex max-w-full flex-col border-2 border-stone-900 bg-stone-100 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2">
      <Link to={`/projects/projectDetails/${project.id}`}>
        <img
          src={`/assets/img/${project.image}`}
          alt={project.title}
          className="h-96 w-full border-b-2 border-stone-900 object-cover"
        />
      </Link>
      <div className="flex-grow p-4">
        <h4 className="text-xl">{project.title}</h4>
        <h5 className="text-md mb-4 text-stone-500">{project.dateCompleted}</h5>
        <p className="mb-4">{project.description}</p>
        {project.techStack.map((tech, techIndex) => (
          <span
            className="mb-1.5 mr-1.5 inline-block bg-stone-300 px-3 py-1.5 text-sm text-stone-600"
            key={techIndex}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-around divide-x-2 divide-stone-900 border-t-2 border-stone-900">
        <button className="text-md w-1/2 py-2 text-stone-500 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:text-orange-500">
          <a href={project.repository}>GitHub Repo</a>
        </button>
        <button className="text-md w-1/2 py-2 text-stone-500 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:text-orange-500">
          <a href={project.deployment}>Deployment</a>
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    dateCompleted: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    repository: PropTypes.string,
    deployment: PropTypes.string,
  }).isRequired,
};
