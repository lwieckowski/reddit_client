import { useContext } from "react";
import { Context } from "../Context";
import { PostListItem } from "../components/PostListItem";

export function SearchPage() {
  const { state } = useContext(Context);

  return (
    <div>
      {state.error && <p>{state.error}</p>}
      {state.posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
}
