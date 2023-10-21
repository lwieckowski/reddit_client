import { createContext } from "react";

export const BULLET = "\u2022";export const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
export const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
export const SECONDS_IN_DAY = SECONDS_IN_HOUR * HOURS_IN_DAY;
export const FONT_SMALL = 12;
export const FONT_LARGE = 15;

export const Mode = {
  POST: "POST",
  COMMENTS_LOADING: "COMMENTS_LOADING",
  SEARCH: "SEARCH",
  SEARCH_LOADING: "SEARCH_LOADING",
}

export const INITIAL_STATE = {
  term: "",
  type: "link", // link (posts), comment, sr (subreddit), user
  sort: "best", // new, hot, best
  period: "day", // all, year, month, week, day, hour
  data: [],
  postURL: "",
  postId: 0,
  comments: [],
  error: "",
  mode: Mode.SEARCH_LOADING,
};

export const Context = createContext(INITIAL_STATE);
