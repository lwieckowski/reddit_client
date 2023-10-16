import { createContext } from "react";

export const Mode = {
  POST: "POST",
  POST_LOADING: "POST_LOADING",
  SEARCH: "SEARCH",
  SEARCH_LOADING: "SEARCH_LOADING",
}

export const initialState = {
  term: "",
  type: "link", // link (posts), comment, sr (subreddit), user
  sort: "best", // new, hot, best
  period: "day", // all, year, month, week, day, hour
  data: [],
  postURL: "",
  post: [],
  error: "",
  mode: Mode.SEARCH,
};

export const Context = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM":
      return {
        ...state,
        term: action.payload,
        mode: Mode.SEARCH_LOADING,
      };
    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.payload,
        mode: Mode.SEARCH_LOADING,
      };
    case "UPDATE_PERIOD":
      return {
        ...state,
        period: action.payload,
        mode: Mode.SEARCH_LOADING,
      };
    case "UPDATE_POST_URL":
      return {
        ...state,
        postURL: action.payload,
        mode: Mode.POST_LOADING,
      };
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        error: "",
        mode: Mode.SEARCH,
      };
    case "FETCH_POST_DETAILS":
      return {
        ...state,
        post: action.payload,
        mode: Mode.POST,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
}
