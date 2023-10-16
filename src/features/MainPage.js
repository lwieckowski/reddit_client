import { useContext } from "react";
import { Context } from "../Context";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { ResultPlaceholder } from "../components/ResultPlaceholder";
import { PostDetails } from "./PostDetails";
import { Error } from "../components/Error";
import { PostListing } from "./PostListing";
import { Mode } from "../Context";

export function MainPage() {
  const { state, dispatch } = useContext(Context);

  function handleSort(e) {
    dispatch({ type: "UPDATE_SORT", payload: e.target.value });
  }

  function handlePeriod(e) {
    dispatch({ type: "UPDATE_PERIOD", payload: e.target.value });
  }

  function handleClick(post) {
    dispatch({ type: "UPDATE_POST_URL", payload: post.permalink });
    dispatch({ type: "UPDATE_POST_DETAILS", payload: post });
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          mt: 2,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 80, mr: 2 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.sort}
              onChange={handleSort}
            >
              <MenuItem value={"best"}>Best</MenuItem>
              <MenuItem value={"new"}>New</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 140 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.period}
              onChange={handlePeriod}
              disabled={state.sort === "new"}
            >
              <MenuItem value={"all"}>All time</MenuItem>
              <MenuItem value={"year"}>Last year</MenuItem>
              <MenuItem value={"month"}>Last month</MenuItem>
              <MenuItem value={"week"}>Last week</MenuItem>
              <MenuItem value={"day"}>Last day</MenuItem>
              <MenuItem value={"hour"}>Last hour</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 0,
          mb: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      </Box>
      <ResultPlaceholder visible={state.mode === Mode.SEARCH_LOADING} />
      <Error message={state.error} />
      <PostDetails post={state.post} visible={state.mode === Mode.POST} />
      <PostListing
        posts={state.data}
        handleClick={handleClick}
        visible={state.mode === Mode.SEARCH}
      />
    </div>
  );
}
