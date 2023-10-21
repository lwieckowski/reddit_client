import { Box, CardActionArea, Card, Divider } from "@mui/material";
import { Post } from "./Post";

export function PostListItem({ post, handleClick }) {
  return (
    <Box>
      <Card sx={{ minWidth: 275, mt: 1 }} elevation={0}>
        <CardActionArea onClick={() => handleClick(post)} disableRipple>
          <Post post={post}></Post>
        </CardActionArea>
      </Card>
      <Divider />
    </Box>
  );
}
