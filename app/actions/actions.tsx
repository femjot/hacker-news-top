"use server";

import { z } from "zod";
import { FeedbackFormStateType } from "@/types";

const formSchema = z.object({
  name: z.string().trim().min(3, "Name must be filled out!"),
  email: z.string().email("Email is invalid!"),
  feedback: z.string().trim().min(3, "Feedback must be filled out!"),
});

const NAME_FORM_FIELD = "name";
const EMAIL_FORM_FIELD = "email";
const FEEDBACK_FORM_FIELD = "feedback";

export const handleFeedbackFormSubmit = async (
  data: FeedbackFormStateType,
  formData: FormData,
): Promise<FeedbackFormStateType> => {
  const result = formSchema.safeParse({
    name: formData.get(NAME_FORM_FIELD),
    email: formData.get(EMAIL_FORM_FIELD),
    feedback: formData.get(FEEDBACK_FORM_FIELD),
  });

  const rawFormData = {
    name: formData.get(NAME_FORM_FIELD),
    email: formData.get(EMAIL_FORM_FIELD),
    feedback: formData.get(FEEDBACK_FORM_FIELD),
  };

  if (result.success) {
    console.log("Feedback has been submitted: ", rawFormData);
    return {
      success: true,
      message: "Thank you! Your feedback has been sent.",
    };
  } else {
    console.log("Form has errors: ", result.error.flatten().fieldErrors);
    return { success: false, errors: result.error.flatten().fieldErrors };
  }
};
