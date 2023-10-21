import "./App.css";
import { Container } from "@mui/material";
import { useReducer } from "react";
import { Context, INITIAL_STATE } from "./Context";
import { reducer } from "./Reducer";
import { SearchAppBar } from "./components/SearchAppBar";
import { MainPage } from "./features/MainPage";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container maxWidth="sm">
        <SearchAppBar state={state} />
        <MainPage />
      </Container>
    </Context.Provider>
  );
}

export default App;
