const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const DETAIL_URL = (id: number) => `${BASE_URL}/item/${id}.json`;

export const fetchItem = async (id: number) => {
  try {
    const response = await fetch(DETAIL_URL(id));
    const story = await response.json();

    return story;
  } catch (error) {
    console.error("Error while fetching hacker news story", error);
    throw error;
  }
};

export const fetchTopStoriesIds = async () => {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$priority"',
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error while fetching hacker news stories ids", error);
    throw error;
  }
};

export const fetchTopStories = async () => {
  try {
    let ids = await fetchTopStoriesIds();
    return Promise.all(ids.map((id: number) => fetchItem(id)));
  } catch (error) {
    console.error("Error while fetching hacker news top stories", error);
  }
};
