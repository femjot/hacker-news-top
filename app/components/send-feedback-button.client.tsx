"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

function SendFeedbackButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-between align-center">
      <div>
        <Link
          id="cancel"
          href="/"
          replace
          className="text-lg text-blue-600 dark:text-blue-500 hover:underline"
        >
          Cancel
        </Link>
      </div>
      <div>
        <button
          id="send"
          disabled={pending}
          className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600
            focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default SendFeedbackButton;
