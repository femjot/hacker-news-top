"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

function FeedbackButton() {
  const { pending } = useFormStatus();

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        id="feedback"
        className="bg-blue-800 hover:bg-blue-600 text-white rounded-full py-3 px-4 shadow-lg"
        type="submit"
        onClick={handleClick}
        disabled={pending}
      >
        <Link href="/feedback">Feedback</Link>
      </button>
    </div>
  );
}

export default FeedbackButton;
