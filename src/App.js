import "./App.css";
import { Container } from "@mui/material";
import { useEffect, useReducer } from "react";
import { Context, reducer, initialState } from "./Context";
import { fetchPosts, search } from "./services/RedditAPI";
import { SearchAppBar } from "./components/SearchAppBar";
import { MainPage } from "./features/MainPage";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    search(dispatch, state.searchTerm);
  }, [state.searchTerm]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container maxWidth="md">
        <SearchAppBar />
        <MainPage />
      </Container>
    </Context.Provider>
  );
}

export default App;
