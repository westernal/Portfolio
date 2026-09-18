import { useId } from "react";
import { useCheckFields, type FieldName } from "../../../hooks/useCheckFields";
import { useSubmitForm } from "../../../hooks/useSubmitForm";
import Spinner from "../../Animations/Spinner";

const ContactForm = () => {
  const { loading, handleSubmit } = useSubmitForm();
  const { checkFields, errors } = useCheckFields();

  // Ids have to be unique per instance, and stable across server and client —
  // the label/input/error wiring below is worthless if they drift on hydration.
  const uid = useId();
  const fieldId = (field: FieldName) => `${uid}-${field}`;
  const errorId = (field: FieldName) => `${uid}-${field}-error`;

  /** Everything each input needs to describe its own error to assistive tech. */
  const a11yProps = (field: FieldName) => ({
    id: fieldId(field),
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? errorId(field) : undefined,
  });

  return (
    <form
      id="contact-form"
      // The browser's own validation bubbles are inconsistent and poorly
      // announced; checkFields owns the messages instead.
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (checkFields(form)) handleSubmit(form);
      }}
    >
      <div className="input-wrapper">
        <label className="field-label" htmlFor={fieldId("name")}>
          Name
        </label>
        <input type="text" autoComplete="name" {...a11yProps("name")} />
        <p className="error" id={errorId("name")} role="alert">
          {errors.name}
        </p>
      </div>

      <div className="input-wrapper">
        <label className="field-label" htmlFor={fieldId("email")}>
          Email
        </label>
        <input type="email" autoComplete="email" {...a11yProps("email")} />
        <p className="error" id={errorId("email")} role="alert">
          {errors.email}
        </p>
      </div>

      <div className="input-wrapper">
        <label className="field-label" htmlFor={fieldId("message")}>
          Message
        </label>
        <textarea rows={4} {...a11yProps("message")} />
        <p className="error" id={errorId("message")} role="alert">
          {errors.message}
        </p>
      </div>

      {/* Web3Forms' own honeypot: bots fill every field they find, and anything
          arriving with this one checked is dropped server-side. Hidden from
          assistive tech as well as from sight, so nobody can trip it by accident. */}
      <input
        type="checkbox"
        name="botcheck"
        className="visually-hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? <Spinner /> : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
