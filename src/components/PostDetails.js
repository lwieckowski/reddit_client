import { Card, CardContent, Typography } from "@mui/material";

export function PostDetails({ post, visible }) {
  if (!visible) return;

  const title = post[0].data.children[0].data.title;
  const body = post[0].data.children[0].data.selftext;
  const comments = post[1].data.children;


  return (
    <div>
      <Card sx={{ minWidth: 275, mt: 1 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 24, mt: 1 }}
            color="text.secondary"
            variant="body2"
            fontWeight="fontWeightBold"
          >
            {title}
          </Typography>
            <Typography
            sx={{ fontSize: 16, mt: 1 }}
            color="text.secondary"
          >
            {body}
          </Typography>
        </CardContent>
      </Card>
                <Typography
            sx={{ fontSize: 16, mt: 4, mb: 1 }}
            color="text.secondary"
            variant="body2"
            fontWeight="fontWeightBold"
          >
            Comments:
          </Typography>
      {comments.map(item =>
        <Card sx={{ minWidth: 275, mt: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 16, mt: 1 }}
              color="text.secondary"
            >
              {item.data.body}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
