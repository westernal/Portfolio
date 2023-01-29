import { projects } from "../../DataLists/projects";
import ProjectItem from "./projectItem";
import { Project } from "../../Interfaces/Interfaces";

const Projects = () => {
  return (
    <section className="jobs reveal projects" id="projects">
      <h2>Projects</h2>
      <section className="my-projects">
        {projects.map((project: Project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
