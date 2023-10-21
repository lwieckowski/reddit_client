import { Box, CardContent, Typography, CardMedia} from "@mui/material";
import { BULLET, SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from "../Context";
import { FONT_SMALL, FONT_LARGE } from "../Context";

export function Post({ post }) {
    return (
        <CardContent>
            <Typography sx={{ fontSize: FONT_SMALL }} color="text.secondary">
                <b>{post.subreddit_name_prefixed}</b> {BULLET} Posted by {post.author}{" "}
                {BULLET} {getPostAge(post)}
            </Typography>
            <Typography
                sx={{ fontSize: FONT_LARGE, mt: 1 }}
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
                    src={post.media.reddit_video.fallback_url}
                    muted
                    preload="metadata"
                    controls
                    playsInline
                    sx={{ borderRadius: 2 }}
                />}
            </Box>
            <Typography sx={{ fontSize: FONT_SMALL, mt: 1 }} color="text.secondary">
                {post.ups} upvotes {BULLET} {post.num_comments} comments {BULLET}{" "}
                {post.total_awards_received} awards
            </Typography>
        </CardContent>
    )
}

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
