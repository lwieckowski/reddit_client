import { Card, CardContent, Typography, Box, Slide, Divider } from "@mui/material";
import { Post } from "./Post";
import { BULLET, FONT_SMALL, FONT_LARGE } from "../Context";

export function PostDetails({ post, comments, visible }) {
  if (!visible) return;
  return (
    <Slide direction="left" in={visible} mountOnEnter mountOnExit>
      <Box>
        <Card sx={{ minWidth: 275, mt: 1 }} elevation={0}>
        <Post post={post}></Post>
        </Card>
        <Typography
          sx={{ fontSize: FONT_LARGE, mt: 4, mb: 1 }}
          color="text.secondary"
          variant="body2"
          fontWeight="fontWeightBold"
        >
          Comments:
        </Typography>
        {comments.map(item =>
          <Box>
            <Card sx={{ minWidth: 275, mt: 1 }} elevation={0}>
              <CardContent>
                <Typography sx={{ fontSize: FONT_SMALL }} color="text.secondary">
                  <b>{post.subreddit_name_prefixed}</b> {BULLET} Posted by {item.data.author}{" "}
                </Typography>
                <Typography
                  sx={{ fontSize: FONT_LARGE, mt: 1 }}
                  color="text.secondary"
                >
                  {item.data.body}
                </Typography>
                <Typography sx={{ fontSize: FONT_SMALL, mt: 1 }} color="text.secondary">
                  {item.data.ups} upvotes {" "}
                </Typography>
              </CardContent>
            </Card>
            <Divider />
          </Box>
        )}
      </Box>
    </Slide>
  );
}
