import Heading from "../shared/Heading";
import ImageCarousel from "./ImageCarousel";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Heading text="Skills" />
      <div className="skills-list ">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Skills;
