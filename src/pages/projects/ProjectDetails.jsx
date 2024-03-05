import { useParams } from "react-router-dom";
import projectsData from "./projectsData.json";
import PageHeader from "../../layout/components/PageHeader";
import ProjectCard from "./ProjectCard";
// import ProjectCard from "./ProjectCard";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));

  if(!project) {
    return <div>Project not found!</div>; // TODO: Needs to throw an error that can be caught by the ErrorBoundary
  }
  return (
    <>
      <PageHeader>{project.title}</PageHeader>
      <ProjectCard project={project} />
    </>
  );
}
