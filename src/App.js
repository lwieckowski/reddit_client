import './App.css';
import { TextField, Container } from '@mui/material';
import {  useEffect, useReducer } from 'react';
import { PostListItem } from './components/PostListItem';
import { Context, reducer, initialState } from './Context';
import { fetchPosts } from './services/RedditAPI'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPosts(dispatch, 'search', state.searchTerm);
  }, [state.searchTerm]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container maxWidth="md">
        <TextField
          label="Search Reddit"
          type="search"
          variant="outlined"
          sx={{ width: "100%", mt: 2, mb: 2 }}
          onChange={(e) => dispatch({ type: 'UPDATE_SEARCH_TERM', payload: e.target.value })}
        />
        {state.error && <p>{state.error}</p>}
        {state.posts.map((post) => <PostListItem key={post.id} post={post} />)}
      </Container>

    </Context.Provider>
  );
}

export default App;
