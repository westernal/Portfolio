import Image from "next/image";
import { Project } from "../../interfaces/Interfaces";
import Tag from "../shared/Tag";
import Link from "next/link";

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <Link
      className={` reveal ${
        project.id % 2 == 0 ? "left-reveal" : "right-reveal"
      }`}
      href={project.link}
      id={`project${project.id}`}
      target="_blank"
    >
      <article className="project blog-item">
        <div className="project-image">
          <Image
            src={project.image.website}
            fill
            id="project-image"
            alt={`${project.title}'s image`}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="project-info">
          <div className="project-title">
            <h3>{project.title}</h3>
            <div id="role" className="flex">
              {project.myRole.frontEnd && <Tag content={"FRONTEND"} />}
              {project.myRole.backEnd && <Tag content={"BACKEND"} />}
              {project.myRole.design && <Tag content={"DESIGN"} />}
            </div>
          </div>

          <p id="project-description">{project.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectItem;
