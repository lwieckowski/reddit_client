import { CardActionArea, Button, TextField, Container, Card, CardContent, Typography, CardActions, Stack } from '@mui/material';
import './App.css';
import { createContext, useEffect, useReducer } from 'react';

const initialState = {
  searchTerm: "node",
  posts: [],
  error: "",
};

const bull = "\u2022"

const Context = createContext(initialState);

function reducer(state, action) {
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

async function fetchPosts(dispatch, endpoint, query='') {
  const url = `https://www.reddit.com/${endpoint}/.json?q=${query}&type=link`;
  const response = await fetch(url);
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
    fetchPosts(dispatch, 'search', state.searchTerm);
  }, [state.searchTerm]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container>
        <TextField
          label="Search Reddit"
          type="search"
          variant="outlined"
          sx={{ width: "100%", mt: 2, mb: 2 }}
          onChange={(e) => dispatch({ type: 'UPDATE_SEARCH_TERM', payload: e.target.value })}
        />
        {state.error && <p>{state.error}</p>}
        {state.posts.sort((d1, d2) => d2.created_utc - d1.created_utc).map((post) => <SearchResult key={post.id} post={post} />)}
      </Container>

    </Context.Provider>
  );
}

function SearchResult({ post }) {

  const created = new Date(post.created_utc * 1000)
  const diff = Math.round((new Date() - created) / 86400000)

  return (
    <Card sx={{ minWidth: 275, mt: 1 }}>
      <CardActionArea>
          <CardContent>
            <Typography sx={{ fontSize: 11 }} color="text.secondary">
              <b>{post.subreddit_name_prefixed}</b> {bull} Posted by {post.author} {bull} {diff} days ago
            </Typography>
            <Typography sx={{ fontSize: 14, mt: 1 }} color="text.secondary" variant="body2" fontWeight="fontWeightBold">
              {post.title}
            </Typography>
            <Typography sx={{ fontSize: 11, mt: 1 }} color="text.secondary">
              {post.ups} upvotes {bull} {post.num_comments} comments {bull} {post.total_awards_received} awards
            </Typography>
        </CardContent>
      </CardActionArea>

  </Card>
  );
}

export default App;
