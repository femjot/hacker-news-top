import Head from "next/head";
import FeedbackForm from "@/app/components/feedback-form.client";

export default async function Page() {
  return (
    <>
      <Head>
        <title>Hacker News Top Stories Feedback Form</title>
        <meta name="description" content="Send me a feedback" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="form-wrapper">
        <h1 className="mb-10">Send Me A Feedback</h1>
        <FeedbackForm />
      </div>
    </>
  );
}
