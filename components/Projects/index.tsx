import { projects } from "../../data/projects";
import ProjectItem from "../../components/Projects/projectItem";
import { Project } from "../../interfaces/Interfaces";
import Heading from "../shared/Heading";

const Projects = () => {
  return (
    <section className=" projects" id="projects">
      <Heading text="Recent Projects" />

      <section className="my-projects blog-list">
        {projects.map((project: Project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </section>
      <div className="flex ">
        <a
          href="https://github.com/westernal"
          className="btn from-top more-button"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
