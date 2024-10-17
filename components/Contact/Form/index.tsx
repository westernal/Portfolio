import { useCheckFields } from "../../../hooks/useCheckFields";
import { useSubmitForm } from "../../../hooks/useSubmitForm";
import Spinner from "../../Animations/Spinner";

const ContactForm = () => {
  const { loading, handleSubmit } = useSubmitForm();
  const { checkFields, errors } = useCheckFields();

  return (
    <form
      onSubmit={(e) => {
        checkFields(e) && handleSubmit(e);
      }}
      id="contact-form"
    >
      <div className="input-wrapper">
        <input type="text" placeholder="Name" name="name" />
        <p className={`error ${!errors?.name && "hidden"}`}>
          Name is required!
        </p>
      </div>

      <div className="input-wrapper">
        <input type="email" name="email" placeholder="Email" />
        <p className={`error ${!errors?.email && "hidden"}`}>
          Email is required!
        </p>
      </div>

      <div className="input-wrapper">
        <textarea
          rows={4}
          name="message"
          placeholder="Write your message here"
        ></textarea>
        <p className={`error ${!errors?.message && "hidden"}`}>
          Message is required!
        </p>
      </div>

      <button type="submit" className="btn from-top resume " disabled={loading}>
        {loading ? <Spinner /> : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
