"use client";

import { useFormStatus } from "react-dom";

function SendFeedbackButton() {
  const { pending } = useFormStatus();

  return (
    <button
      id="send"
      disabled={pending}
      className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600
            focus:outline-none"
    >
      Send
    </button>
  );
}

export default SendFeedbackButton;
