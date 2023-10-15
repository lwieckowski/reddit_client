import { createContext } from "react";

export const initialState = {
  term: "",
  type: "link", // link (posts), comment, sr (subreddit), user
  sort: "best", // new, hot, best
  period: "day", // all, year, month, week, day, hour
  data: [],
  error: "",
  is_loading: false,
};

export const Context = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM":
      return {
        ...state,
        term: action.payload,
      };
    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    case "UPDATE_PERIOD":
      return {
        ...state,
        period: action.payload,
      };
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        error: "",
        is_loading: false,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        data: [],
        is_loading: false,
      };
    case "IS_LOADING":
      return {
        ...state,
        is_loading: true,
      };
    default:
      return state;
  }
}
