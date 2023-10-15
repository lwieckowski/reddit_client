import { Box, CardActionArea, Card, CardContent, Typography, CardMedia } from "@mui/material";

const bull = "\u2022";

export function PostListItem({ post }) {

  function getAge(post) {
    const now = new Date();
    const created = new Date(post.created_utc * 1000);
    const secondsAgo = Math.max(Math.floor((now - created) / 1000), 0);
    if (secondsAgo < 60)
      return `${secondsAgo} seconds ago`;
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60)
      return `${minutesAgo} minutes ago`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24)
      return `${hoursAgo} hours ago`;
    return `${Math.floor(hoursAgo / 24)} days ago`;
  }

  return (
    <Card sx={{ minWidth: 275, mt: 1 }}>
      <CardActionArea sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: 13 }} color="text.secondary">
              <b>{post.subreddit_name_prefixed}</b> {bull} Posted by {post.author}{" "}
              {bull} {getAge(post)}
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
              {post.ups} upvotes {bull} {post.num_comments} comments {bull}{" "}
              {post.total_awards_received} awards
            </Typography>
          </CardContent>
        </Box>
        <Box>
        <CardMedia
            sx={{ width: 120, height: 120, m: 1, objectFit: "contain" }}
            image={post.thumbnail}
        />
        </Box>
      </CardActionArea>
    </Card>
  );
}
