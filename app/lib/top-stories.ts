export const fetchItem = async (id: string) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    );
    const story = await response.json();
    return story;
  } catch (error) {
    console.error("Error while fetching hacker news story", error);
  }
};

export const fetchTopStoriesIds = async () => {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$priority"&limitToFirst=10',
    );
    const data = await response.json();
    return data.slice(0, 30);
  } catch (error) {
    console.error("Error while fetching hacker news stories ids", error);
  }
};

export const fetchTopStories = async () => {
  try {
    let ids = await fetchTopStoriesIds();
    return Promise.all(ids.map((id: string) => fetchItem(id)));
  } catch (error) {
    console.error("Error while fetching hacker news top stories", error);
  }
};
