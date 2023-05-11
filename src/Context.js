import { createContext } from 'react';

export const initialState = {
  searchTerm: "node",
  posts: [],
  error: "",
};


export const Context = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        posts: [],
      };
    default:
      return state;
  }
}