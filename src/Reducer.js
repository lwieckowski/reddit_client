import { Mode } from "./Context";

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
      };
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
