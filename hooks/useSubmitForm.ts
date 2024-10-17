import { useState } from "react";
import { toast } from "react-toastify";

export const useSubmitForm = () => {
  const [loading, SetLoading] = useState<boolean>(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    SetLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_CONTACT_KEY || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result?.success) {
      toast.success(result.message);
    } else toast.error(result?.message);

    SetLoading(false);
  }

  return { handleSubmit, loading };
};
