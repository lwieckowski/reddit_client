import { Box, CardActionArea, Card, CardContent, Typography, CardMedia, Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * HOURS_IN_DAY;

const BULLET = "\u2022";

export function getPostAge(post) {
  const created = new Date(post.created_utc * 1000);
  const secondsAgo = Math.max(Math.round((new Date() - created) / 1000), 0);
  if (secondsAgo > SECONDS_IN_DAY)
    return `${Math.round(secondsAgo / SECONDS_IN_DAY)} days ago`;
  if (secondsAgo > SECONDS_IN_HOUR)
    return `${Math.round(secondsAgo / SECONDS_IN_HOUR)} hours ago`;
  if (secondsAgo > SECONDS_IN_MINUTE)
    return `${Math.round(secondsAgo / SECONDS_IN_MINUTE)} minutes ago`;
  return `${secondsAgo} seconds ago`;
}

export function PostListItem({ post, handleClick }) {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const fontSmall = isSmallScreen ? 11 : 13;
  const fontLarge = isSmallScreen ? 13 : 16;

  return (
    <Box>
      <Card sx={{ minWidth: 275, mt: 1 }} elevation={0}>
        <CardActionArea
          onClick={() => handleClick(post)}
          disableRipple
        >
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
            <Box sx={{ m: 2 }}>
              {post.post_hint === "image" && <CardMedia
                component="img"
                src={post.url}
                sx={{ borderRadius: 2 }}
              />}
              {post.post_hint === "hosted:video" && <CardMedia
                component="video"
                src={post.media.reddit_video.fallback_url + "#t=0.1"}
                preload="metadata"
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

        </CardActionArea>
      </Card>
      <Divider />
    </Box>
  );
}
