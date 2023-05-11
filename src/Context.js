import { createContext } from "react";

export const initialState = {
  searchTerm: "node",
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
        searchTerm: action.payload,
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
