import React from "react";
import { fetchItem } from "@/app/lib/top-stories";
import Link from "next/link";
import { HackerNewsStoryType } from "@/types";
import Head from "next/head";
import { fromTimeToNowAsWord } from "@/app/utils";

export default async function Page(props: {
  params: { id: number };
  searchParams: { id: string };
}) {
  const {
    params: { id },
  } = props;
  const story: HackerNewsStoryType = await fetchItem(id);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="text-lg font-bold place-self-start">
        <Link href="/">← Back to home page</Link>
      </div>
      <h1>Details of the story</h1>
      <Head>
        <title>Details of the story</title>
        <meta name="description" content="Details of the selected story." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-full pb-80">
        <div className="m-auto flex max-w-full lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
          <div className="">
            <div className="my-12">
              <h1 className="text-4xl">
                <a
                  aria-label="Read more about story"
                  className="cursor-pointer text-3xl underline md:decoration-4"
                  href={story.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {story.title}
                </a>
                <span className="ml-2 text-xl">
                  ({new URL(story.url).hostname})
                </span>
              </h1>
            </div>
            <div className="ml-2 pb-2 mb-5 text-xl border-b">
              {story.score} points by {story.by}
            </div>
            <div className="ml-2 pb-2 mb-5 text-xl border-b">
              {fromTimeToNowAsWord(story.time as number)} ago
            </div>
            <div className="ml-2 pb-2 mb-5 text-xl border-b">
              <a
                href={`https://news.ycombinator.com/item?id=${id}`}
                target="_blank"
                rel="noreferrer"
              >
                {story.descendants} comments
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
