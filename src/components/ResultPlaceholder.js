import { Skeleton } from "@mui/material";

export function ResultPlaceholder({ visible }) {
  if (!visible) return;
  return (
    Array.from(new Array(10)).map((_, __) => (
      <div>
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", width: 300, ml: 1 }}
          animation="pulse" />
        <Skeleton
          variant="rounded"
          width="100%" height={180}
          sx={{ ml: 1 }}
          animation="pulse" />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", width: 200, ml: 1, mb: 1 }}
          animation="pulse"
        />
      </div>
    ))
  );
}
