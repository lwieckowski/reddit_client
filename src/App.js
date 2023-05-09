import './App.css';
import { createContext, useEffect, useReducer } from 'react';

const initialState = {
  posts: [],
  error: "",
};

const Context = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
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

async function fetchPosts(dispatch, subreddit) {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  if (!response.ok) {
    dispatch({
      type: 'ERROR',
      payload: `Something went wrong! Response status: ${response.status}`,
    });
	} else {
    const data = await response.json();
    dispatch({
      type: 'FETCH_POSTS',
      payload: data.data.children.map((c) => c.data),
    });
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPosts(dispatch, 'reactjs');
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {state.error && <p>{state.error}</p>}
      {state.posts.map((post) => <p>{post.title}</p>)}
    </Context.Provider>
  );
}

export default App;
