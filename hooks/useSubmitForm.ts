import { useState } from "react";
import { toast } from "react-toastify";
import { track } from "@vercel/analytics/react";

export const useSubmitForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(form: HTMLFormElement) {
    setLoading(true);

    const formData = new FormData(form);
    formData.append("access_key", process.env["NEXT_PUBLIC_CONTACT_KEY"] || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (result?.success) {
        toast.success("Thanks — your message is on its way. I'll reply soon.");
        track("contact_form_submitted");
        form.reset();
      } else {
        toast.error(result?.message || "Something went wrong. Try emailing me instead.");
      }
    } catch {
      // A network failure used to reject unhandled and leave the button spinning.
      toast.error("Couldn't send that. Check your connection, or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading };
};
