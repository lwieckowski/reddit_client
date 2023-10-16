import { Box, CardActionArea, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";


export function PostDetails({ post, visible }) {
  if (!visible) return;

  const title = post[0].data.children[0].data.title;
  const comments = post[1].data.children;

  return (
    <Card sx={{ minWidth: 275, mt: 1 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, mt: 1 }}
          color="text.secondary"
          variant="body2"
          fontWeight="fontWeightBold"
        >
          {title}
        </Typography>
        {comments.map(item => <p>{item.data.body}</p>)}
      </CardContent>
    </Card>
  );
}
