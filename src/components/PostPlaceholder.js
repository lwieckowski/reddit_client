import { Skeleton } from "@mui/material";

export function CommentsPlaceholder({ visible }) {
  if (!visible) return;
  return (
    <div>
    {Array.from(new Array(15)).map((_, __) => (
      <div>
        <Skeleton
          variant="rounded"
          width="100%"
          height={90}
          sx={{ ml: 1, mt: 1 }}
          animation="pulse" />
      </div>
    ))}
    </div>
  );
}
