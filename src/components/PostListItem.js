import { Box, CardActionArea, Card, CardContent, Typography, CardMedia } from "@mui/material";

const bull = "\u2022";

export function PostListItem({ post }) {
  const created = new Date(post.created_utc * 1000);
  const diff = Math.round((new Date() - created) / 86400000);

  return (
    <Card sx={{ minWidth: 275, mt: 1 }}>
      <CardActionArea sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: 13 }} color="text.secondary">
              <b>{post.subreddit_name_prefixed}</b> {bull} Posted by {post.author}{" "}
              {bull} {diff} days ago
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
