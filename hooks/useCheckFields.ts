import { useState } from "react";

export type FieldName = "name" | "email" | "message";

/** A message per invalid field, so the component renders copy rather than booleans. */
export type FieldErrors = Partial<Record<FieldName, string>>;

/**
 * Roughly what the browser itself accepts for `type="email"`. The form is
 * `noValidate` so that errors are announced by us in one consistent place
 * instead of by the browser's own bubble, which screen readers handle poorly.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const value = (form: HTMLFormElement, field: FieldName) =>
  (form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement | null)
    ?.value.trim() ?? "";

export const useCheckFields = () => {
  const [errors, setErrors] = useState<FieldErrors>({});

  /** Returns true when the form is safe to submit. */
  function checkFields(form: HTMLFormElement) {
    const next: FieldErrors = {};

    if (!value(form, "name")) next.name = "Please enter your name.";

    const email = value(form, "email");
    if (!email) next.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email))
      next.email = "That doesn't look like an email address.";

    if (!value(form, "message")) next.message = "Please write a message.";

    setErrors(next);

    // Move the reader — and the keyboard — to the first thing that needs fixing.
    const firstInvalid = (["name", "email", "message"] as const).find(
      (field) => next[field],
    );
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
    }

    return firstInvalid === undefined;
  }

  return { checkFields, errors };
};
