export function Error( {message }) {
    if (!message) return;
    return (
        <p>{message}</p>
    )
}