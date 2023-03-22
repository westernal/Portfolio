import { projects } from "../../DataLists/projects";
import ProjectItem from "./projectItem";
import { Project } from "../../Interfaces/Interfaces";

const Projects = () => {
  return (
    <section className=" projects" id="projects">
      <section className="my-projects blog-list">
        {projects.map((project: Project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
