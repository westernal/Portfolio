import Image from "next/image";
import { Project } from "../../interfaces/Interfaces";
import Tag from "../shared/Tag";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectItem = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: project.id * 0.2 }}
      viewport={{ once: true }}
      href={project.link}
      id={`project${project.id}`}
      target="_blank"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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

          <motion.div
            className="hover-image"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image.mobile}
              fill
              alt={`Mobile view for ${project.title}`}
              style={{ objectFit: "cover" }}
            />
          </motion.div>
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
    </motion.a>
  );
};

export default ProjectItem;
