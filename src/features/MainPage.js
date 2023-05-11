import { useContext } from "react";
import { Context } from "../Context";
import { PostListItem } from "../components/PostListItem";
import { Stack, Button, Box } from "@mui/material";
import { fetchPosts } from "../services/RedditAPI";
import { ResultPlaceholder } from "../components/ResultPlaceholder";

export function MainPage() {
  const { state, dispatch } = useContext(Context);

  function handleHot() {
    fetchPosts(dispatch, "hot");
  }

  function handleNew() {
    fetchPosts(dispatch, "new");
  }

  function handleTop() {
    fetchPosts(dispatch, "top");
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          mt: 2,
          mb: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={handleHot}>
            Hot
          </Button>
          <Button variant="outlined" onClick={handleNew}>
            New
          </Button>
          <Button variant="outlined" onClick={handleTop}>
            Top
          </Button>
        </Stack>
      </Box>
      {state.is_loading ? (
        <ResultPlaceholder />
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        state.data.map((item) => <PostListItem key={item.id} post={item} />)
      )}
    </div>
  );
}
