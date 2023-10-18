import { createContext } from "react";

export const Mode = {
  POST: "POST",
  COMMENTS_LOADING: "COMMENTS_LOADING",
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
  postId: 0,
  comments: [],
  error: "",
  mode: Mode.SEARCH_LOADING,
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
        postURL: action.payload.url,
        postId: action.payload.id,
        mode: Mode.COMMENTS_LOADING,
      };
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        error: "",
        mode: Mode.SEARCH,
      };
    case "GO_BACK":
      return {
        ...state,
        mode: Mode.SEARCH,
        comments: [],
      }
    case "FETCH_COMMENTS":
      return {
        ...state,
        comments: action.payload,
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
