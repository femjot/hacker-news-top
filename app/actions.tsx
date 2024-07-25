"use server";

export const handleFeedbackFormSubmit = async (formData: FormData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    feedback: formData.get("feedback"),
  };

  console.log("submit form: ", rawFormData);
};
