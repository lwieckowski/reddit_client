import { PostListItem } from "./PostListItem";

export function PostListing({ posts, handleClick, visible }) {
    if (!visible) return;
    return (
        posts.map(
            item => (
                <PostListItem
                    key={item.id}
                    post={item}
                    handleClick={handleClick}
                />
            )
        )
    );
}