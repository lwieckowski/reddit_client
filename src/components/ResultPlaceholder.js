import { Skeleton } from "@mui/material";

export function ResultPlaceholder() {
  return (
    // create a map of the skeleton component with 10 elements
    // <Skeleton variant="rounded" height={100} animation="pulse"/>
    Array.from(new Array(10)).map((item, index) => (
      <div>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: 300, ml: 1 }} />
        <Skeleton variant="rounded" width={840} height={90} sx={{ ml: 1 }} />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", width: 200, ml: 1, mb: 1 }}
        />
      </div>
    ))
  );
}
