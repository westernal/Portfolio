import Image from "next/image";
import { Project } from "../../interfaces/Interfaces";

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <article
      className="project blog-item reveal left-reveal"
      id={`project${project.id}`}
    >
      <div className="project-image">
        <Image
          src={project.image.website}
          width={322.8}
          height={150}
          id="project-image"
          alt={`${project.title}'s image`}
        />
      </div>
      <div className="project-info">
        <div className="project-title">
          <div
            className="project-color"
            style={{ background: "darkslateblue" }}
          ></div>
          <h3>{project.title}</h3>
          <p id="role">
            {project.myRole.frontEnd && "FRONTEND"}
            {project.myRole.backEnd && " | BACKEND"}
            {project.myRole.design && " | DESIGN"}
          </p>
        </div>
        <div className="flex">
          <p id="project-description">{project.description}</p>
        </div>
        <section className="project-links flex">
          <a href={project.link.gitHub} style={{ background: "darkslateblue" }}>
            <Image
              src={"/Images/github.svg"}
              width={20}
              height={20}
              alt="GitHub"
            />
            GitHub
          </a>

          {project.link.website && (
            <a
              href={project.link.website}
              style={{ background: "darkslateblue" }}
            >
              <Image
                src={"/Images/Website.svg"}
                width={20}
                height={20}
                alt="Website"
              />
              Website
            </a>
          )}
        </section>
      </div>
    </article>
  );
};

export default ProjectItem;
