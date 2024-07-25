import React from "react";
import { fetchItem } from "@/app/lib/top-stories";
import Link from "next/link";
import { HackerNewsStoryType } from "@/types";

export default async function Page(props: {
  params: { id: string };
  searchParams: { id: string };
}) {
  const {
    params: { id },
  } = props;
  const story: HackerNewsStoryType = await fetchItem(id);

  return (
    <div className="h-full pb-80">
      <div className="m-auto flex max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">← Back to home page</Link>
          </div>
          <div className="my-4">
            <h1 className="text-4xl">
              <a
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
              <span>{story.time} ago</span>
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
            <div className="mb-12">
              <div>
                <a
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
              </div>
              <div className="ml-2 text-xl text-gray-500">
                <span>
                  {story.score} points by {story.by}
                </span>
                <span>{story.time} ago</span>
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
