import { fetchTopStories } from "@/app/lib/top-stories";
import { HackerNewsStoryType } from "@/types";
import Link from "next/link";
import FeedbackButton from "@/app/components/feedback-button.client";

async function getData() {
  return await fetchTopStories();
}

export default async function Home() {
  const topStories = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hacker News Top 20 Stories</h1>
      <ul>
        {!!topStories &&
          topStories.map((story: HackerNewsStoryType, idx: number) => (
            <li
              key={story.id}
              className="px-6 py-2 border-b border-gray-200 w-full"
            >
              <Link href={`/story/${story.id}`}>
                {idx + 1}. {story.title}
              </Link>
            </li>
          ))}
      </ul>
      <div>
        <FeedbackButton />
      </div>
      <h2 className="font-inter">Discover hacker news top stories!</h2>
    </main>
  );
}
