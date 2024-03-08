import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    // TODO: Animation is weird on hover exit, everything else is fine, need to fix it
    <motion.div
      initial={{
        boxShadow: "0 0 0 0 #292524",
        transition: { duration: 0.3, ease: "easeInOut", stiffness: 260 },
      }}
      whileInView={{
        boxShadow: "15px 15px 0 0 #292524",
        transition: { duration: 0.3, ease: "easeInOut", stiffness: 260 },
      }}
      whileHover={{
        x: -8,
        y: -8,
        boxShadow: "20px 20px 0 5px #292524",
        transition: { duration: 0.3, ease: "easeInOut", stiffness: 260 },
      }}
      className="flex max-w-full flex-col border-4 border-stone-900 bg-stone-100 hover:bg-stone-200"
    >
      <Link to={`/projects/projectDetails/${project.id}`}>
        {project.image ? (
          <img
            src={`/assets/img/${project.image}`}
            alt={project.title}
            className="h-96 w-full border-b-4 border-stone-900 object-cover"
          />
        ) : (
          <p className="flex h-96 w-full items-center justify-center border-b-4 border-stone-900 bg-stone-300 font-bold">
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
    </motion.div>
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
