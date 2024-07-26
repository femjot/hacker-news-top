import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

export const fromTimeToNowAsWord = (time: number) => {
  const postTime = fromUnixTime(time);
  return formatDistanceToNowStrict(postTime);
};
