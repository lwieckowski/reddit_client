import "./App.css";
import { Container } from "@mui/material";
import { useEffect, useReducer } from "react";
import { Context, reducer, initialState } from "./Context";
import { search } from "./services/RedditAPI";
import { SearchAppBar } from "./components/SearchAppBar";
import { MainPage } from "./features/MainPage";
import { fetchComments } from "./services/RedditAPI";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    search(dispatch, state.term, state.type, state.sort, state.period);
  }, [state.term, state.type, state.sort, state.period]);

  useEffect(() => {
    fetchComments(dispatch, state.postURL);
  }, [state.postURL]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container maxWidth="sm">
        <SearchAppBar />
        <MainPage />
      </Container>
    </Context.Provider>
  );
}

export default App;
