import ProjectsList from "./ProjectsList";
import PageHeader from "../../layout/components/PageHeader";

export default function Projects() {
  return (
    <>
      <PageHeader>Projects</PageHeader>
      <section className="bg-orange-500">
        <div className="p-6 lg:p-10">
          <ProjectsList />
        </div>
      </section>
    </>
  );
}
