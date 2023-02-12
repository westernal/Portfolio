import Image from "next/image";
import { Project } from "../../Interfaces/Interfaces";
import { useEffect } from "react";

const ProjectItem = ({ project }: { project: Project }) => {
  useEffect(() => {
    if (project.id === 0) {
      document.getElementById("project0")?.classList.add("active");
    }
  }, []);

  const nextProject = () => {
    if (project.id === 3) {
      document.getElementById("project3")?.classList.remove("active");
      document.getElementById("project0")?.classList.add("active");
    } else {
      document
        .getElementById(`project${project.id}`)
        ?.classList.remove("active");
      document
        .getElementById(`project${project.id + 1}`)
        ?.classList.add("active");
    }
  };
  return (
    <div className="project" id={`project${project.id}`}>
      <section className="project-images reveal">
        <Image
          src={project.image.mobile}
          width={200}
          height={400}
          alt={`${project.title}'s mobile version`}
        />
      </section>
      <section className="project-info reveal">
        <div
          className="project-color"
          style={{ background: project.color }}
        ></div>
        <div className="project-title">
          <h3>{project.title}</h3>
          <p id="role">
            {project.myRole.frontEnd && "FRONTEND"}
            {project.myRole.backEnd && " | BACKEND"}
            {project.myRole.design && " | DESIGN"}
          </p>
        </div>
        <p id="project-description">{project.description}</p>
        <section className="project-links flex">
          <a href={project.link.gitHub} style={{ background: project.color }}>
            GitHub
          </a>
          {project.link.documentation && (
            <a
              href={project.link.documentation}
              style={{ background: project.color }}
            >
              Documentation
            </a>
          )}
          {project.link.website && (
            <a
              href={project.link.website}
              style={{ background: project.color }}
            >
              Website
            </a>
          )}
        </section>
      </section>

      <div>
        <Image
          src="/Images/right arrow.svg"
          width={100}
          height={100}
          onClick={nextProject}
          alt="right-arrow"
          className="next-button reveal"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
