import Heading from "../shared/Heading";
import ContactForm from "./Form";

const Socials = () => {
  return (
    <section className="socials" id="contact">
      <div className="socials-layout">
        <Heading text="Be in touch with me" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Socials;
