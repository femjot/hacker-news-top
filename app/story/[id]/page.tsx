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
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-lg font-bold">
        <Link href="/">← Back to home page</Link>
      </div>
      <h1>Details of the story</h1>
      <Head>
        <title>Details ofd the story</title>
        <meta name="description" content="Details of the selected story." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-full pb-80">
        <div className="m-auto flex max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
          <div className="">
            <div className="my-12">
              <h1 className="text-4xl">
                <a
                  aria-label="Read more about story"
                  className="cursor-pointer text-3xl"
                  href={story.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {story.title}
                </a>
                <span className="ml-2 text-xl text-gray-500">
                  ({new URL(story.url).hostname})
                </span>
              </h1>
              <div className="ml-2 text-xl text-gray-500">
                <span>
                  {story.score} points by {story.by}
                </span>
                <span> </span>
                <span>{fromTimeToNowAsWord(story.time as number)} ago</span>
                <span> | </span>
                <span>
                  <a
                    href={`https://news.ycombinator.com/item?id=${id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {story.descendants} comments
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
