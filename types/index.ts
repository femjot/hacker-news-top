export type HackerNewsStoryType = {
  by: string;
  descendants: number;
  id: string;
  score: number;
  time: Date;
  title: string;
  type: string;
  url: string;
};

export type FeedbackFormStateType = {
  errors?: {
    name?: string[];
    email?: string[];
    feedback?: string[];
  };
  message?: string | null;
  success: boolean;
};
