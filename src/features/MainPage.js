import { useContext } from "react";
import { Context } from "../Context";
import { Box, FormControl, Select, MenuItem, IconButton } from "@mui/material";
import { ResultPlaceholder } from "../components/ResultPlaceholder";
import { PostDetails } from "../components/PostDetails";
import { Error } from "../components/Error";
import { PostListing } from "../components/PostListing";
import { Mode } from "../Context";
import { CommentsPlaceholder } from "../components/PostPlaceholder";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { search } from "../services/RedditAPI";
import { fetchComments } from "../services/RedditAPI";
import { useEffect } from "react";

export function MainPage() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    search(dispatch, state.term, state.type, state.sort, state.period);
  }, [state.term, state.type, state.sort, state.period]);

  useEffect(() => {
    fetchComments(dispatch, state.postURL);
  }, [state.postURL]);

  function handleSort(e) {
    dispatch({ type: "UPDATE_SORT", payload: e.target.value });
  }

  function handlePeriod(e) {
    dispatch({ type: "UPDATE_PERIOD", payload: e.target.value });
  }

  function handleClick(post) {
    window.scrollTo(0, 0);
    dispatch(
      {
        type: "UPDATE_POST_URL",
        payload: { url: post.permalink, id: post.id }
      }
    );
  }

  function handleGoBack() {
    dispatch({ type: "GO_BACK" })
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          mt: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {state.mode !== Mode.SEARCH && state.mode !== Mode.SEARCH_LOADING && <IconButton
          children={<ArrowBackIosNewIcon fontSize="medium"></ArrowBackIosNewIcon>}
          size="large"
          onClick={handleGoBack}
        >
        </IconButton>}
        {state.mode === Mode.SEARCH &&
        <Box sx={{ display: "flex", height: "55px" }}>
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
        </Box>}
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
      <Error message={state.error} />
      <ResultPlaceholder visible={state.mode === Mode.SEARCH_LOADING} />
      <PostListing
        posts={state.data}
        handleClick={handleClick}
        visible={state.mode === Mode.SEARCH}
      />
      <PostDetails
        post={state.data[state.postId]}
        comments={state.comments}
        visible={state.mode === Mode.COMMENTS_LOADING || state.mode === Mode.POST}
        handleGoBack={handleGoBack}
      />
      <CommentsPlaceholder visible={state.mode === Mode.COMMENTS_LOADING} />
    </Box>
  );
}
