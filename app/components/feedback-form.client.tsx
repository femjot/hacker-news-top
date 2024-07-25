"use client";

import { useEffect, useRef } from "react";
import { handleFeedbackFormSubmit } from "@/app/actions/actions";
import SendFeedbackButton from "@/app/components/send-feedback-button.client";
import { FeedbackFormStateType } from "@/types";
import { useFormState } from "react-dom";
import FormErrors from "@/app/components/form-errors.client";

export function FeedbackForm() {
  const initialState: FeedbackFormStateType = {
    message: null,
    errors: {},
    success: false,
  };
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(
    handleFeedbackFormSubmit,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      // action={async (formData) => {
      //   await handleFeedbackFormSubmit(initialState, formData);
      //   ref.current?.reset();
      // }}
    >
      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Please feel free to leave any comments here.
        </h2>
        <div className="mb-2">
          <label
            id="lblName"
            aria-label="Please enter your name, this is a required field."
            htmlFor="name"
            className="text-sm leading-7 text-gray-600"
          >
            Name
          </label>
          <input
            aria-labelledby="lblName"
            id="name"
            name="name"
            placeholder="Name"
            className="mb-2 w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <FormErrors errors={state.errors?.name} />
        </div>
        <div className="mb-2">
          <label
            id="lblEmail"
            aria-label="Please enter your email, this is a required field."
            htmlFor="email"
            className="text-sm leading-7 text-gray-600"
          >
            Email
          </label>
          <input
            aria-labelledby="lblEmail"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mb-2 w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <FormErrors errors={state.errors?.email} />
        </div>
        <div className="mb-2">
          <label
            id="lblFeedback"
            aria-label="Please enter your feedback, this is a required field."
            htmlFor="feedback"
            className="text-sm leading-7 text-gray-600"
          >
            Feedback
          </label>
          <textarea
            aria-labelledby="lblFeedback"
            id="feedback"
            name="feedback"
            placeholder="Feedback..."
            className="mb-2 h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
          <FormErrors errors={state.errors?.feedback} />
        </div>
        {state.success && state.message}
        <SendFeedbackButton />
      </div>
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  );
}
