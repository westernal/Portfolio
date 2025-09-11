import { useState } from "react";

export const useCheckFields = () => {
  const [errors, SetErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  function checkFields(event: any) {
    event.preventDefault();
    SetErrors({
      name: false,
      email: false,
      message: false,
    });
    let canSubmit = true;

    const form = event.target;

    if (!form?.name?.value) {
      SetErrors((prev) => {
        return { ...prev, name: true };
      });

      canSubmit = false;
    }

    if (!form?.email?.value) {
      SetErrors((prev) => {
        return { ...prev, email: true };
      });

      canSubmit = false;
    }

    if (!form?.message?.value) {
      SetErrors((prev) => {
        return { ...prev, message: true };
      });

      canSubmit = false;
    }

    return canSubmit;
  }

  return { checkFields, errors };
};
