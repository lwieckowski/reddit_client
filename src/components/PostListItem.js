import { Box, CardActionArea, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * HOURS_IN_DAY;

const BULLET = "\u2022";

export function PostListItem({ post }) {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  function getPostAge(post) {
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

  const sxContainer = isSmallScreen ? {} : { display: 'flex', justifyContent: 'space-between' }

  return (
    <Card sx={{ minWidth: 275, mt: 1 }}>
      <CardActionArea sx={ sxContainer }>
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: 13 }} color="text.secondary">
              <b>{post.subreddit_name_prefixed}</b> {BULLET} Posted by {post.author}{" "}
              {BULLET} {getPostAge(post)}
            </Typography>
            <Typography
              sx={{ fontSize: 16, mt: 1 }}
              color="text.secondary"
              variant="body2"
              fontWeight="fontWeightBold"
            >
              {post.title}
            </Typography>
            <Typography sx={{ fontSize: 13, mt: 1 }} color="text.secondary">
              {post.ups} upvotes {BULLET} {post.num_comments} comments {BULLET}{" "}
              {post.total_awards_received} awards
            </Typography>
          </CardContent>
        </Box>
        <Box>
          <CardMedia
            sx={!isSmallScreen && { width: 120, height: 120, m: 1, objectFit: "contain" }}
            image={post.thumbnail}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}
