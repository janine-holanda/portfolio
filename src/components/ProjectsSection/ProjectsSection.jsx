import projectsData from "../../data/projects.json";
import Card from "../ProjectCard/Card";

export default function ProjectsSection({ projectsRef }) {
  return (
    <section ref={projectsRef} className="section bg-projects-pattern">
      <div className="container h-full flex flex-col items-center">
        <h1 className="text-m-yellow">Projects</h1>
        <div className="flex flex-wrap justify-center gap-6 max-w-screen-lg">
          {projectsData.map((project) => {
            return <Card key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
