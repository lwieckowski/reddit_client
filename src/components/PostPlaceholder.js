import { Skeleton } from "@mui/material";

export function PostPlaceholder({ visible }) {
  if (!visible) return;
  return (
    <div>
        <Skeleton
          variant="rounded"
          width={840} height={540}
          sx={{ ml: 1, mt: 1 }}
          animation="pulse" />
    {Array.from(new Array(15)).map((_, __) => (
      <div>
        <Skeleton
          variant="rounded"
          width={840} height={90}
          sx={{ ml: 1, mt: 1 }}
          animation="pulse" />
      </div>
    ))}
    </div>
  );
}
