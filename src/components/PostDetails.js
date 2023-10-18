import { Card, CardContent, Typography, Box, CardMedia, Slide, Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { getPostAge } from "./PostListItem";


const BULLET = "\u2022";

export function PostDetails({ post, comments, visible, handleGoBack }) {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const fontSmall = isSmallScreen ? 11 : 13;
  const fontLarge = isSmallScreen ? 13 : 16;

  if (!visible) return;

  return (
    <Slide direction="left" in={visible} mountOnEnter mountOnExit>
      <Box>
        <Card sx={{ minWidth: 275, mt: 1 }} elevation={0}>
          <CardContent>
            <Typography sx={{ fontSize: fontSmall }} color="text.secondary">
              <b>{post.subreddit_name_prefixed}</b> {BULLET} Posted by {post.author}{" "}
              {BULLET} {getPostAge(post)}
            </Typography>
            <Typography
              sx={{ fontSize: fontLarge, mt: 1 }}
              color="text.secondary"
              variant="body2"
              fontWeight="fontWeightBold"
            >
              {post.title}
            </Typography>
            <Typography
              sx={{ fontSize: fontLarge, mt: 1 }}
              color="text.secondary"
            >
              {post.body}
            </Typography>
            <Box sx={{ m: 2 }}>
              {post.post_hint === "image" && <CardMedia
                component="img"
                src={post.url}
                sx={{ borderRadius: 2 }}
              />}
              {post.post_hint === "hosted:video" && <CardMedia
                component="video"
                src={post.media.reddit_video.fallback_url}
                autoPlay
                muted
                loop
                playsInline
                controls
                sx={{ borderRadius: 2 }}
              />}
            </Box>
            <Typography sx={{ fontSize: fontSmall, mt: 1 }} color="text.secondary">
              {post.ups} upvotes {BULLET} {post.num_comments} comments {BULLET}{" "}
              {post.total_awards_received} awards
            </Typography>
          </CardContent>
        </Card>
        <Typography
          sx={{ fontSize: fontLarge, mt: 4, mb: 1 }}
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
                <Typography sx={{ fontSize: fontSmall }} color="text.secondary">
                  <b>{post.subreddit_name_prefixed}</b> {BULLET} Posted by {item.data.author}{" "}
                </Typography>
                <Typography
                  sx={{ fontSize: fontLarge, mt: 1 }}
                  color="text.secondary"
                >
                  {item.data.body}
                </Typography>
                <Typography sx={{ fontSize: fontSmall, mt: 1 }} color="text.secondary">
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
