import Head from "next/head";
import SendFeedbackButton from "@/app/components/send-feedback-button.client";

export default function Page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      feedback: formData.get("feedback"),
    };
    console.log("submit form: ", rawFormData);
  };

  return (
    <>
      <Head>
        <title>Hacker News Top Stories Feedback Form</title>
        <meta name="description" content="Send me a feedback" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="form-wrapper">
        {/*<div className="b-screen flex items-center justify-center">*/}
        <h1 className="mb-10">Send Me A Feedback</h1>
        <form action={handleSubmit}>
          <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Please feel free to leave any comments here.
            </h2>
            {/*<p className="title-font mb-1 text-lg font-medium text-gray-900">*/}
            {/*  I welcome your feedback or comments.*/}
            {/*</p>*/}
            <div className="mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="text-sm leading-7 text-gray-600"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Feedback..."
                required
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <SendFeedbackButton />
          </div>
        </form>
      </div>
    </>
  );
}
