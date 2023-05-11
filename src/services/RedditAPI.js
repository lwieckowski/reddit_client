
export async function fetchPosts(dispatch, endpoint, query='', type='link') {
    const url = `https://www.reddit.com/${endpoint}/.json?q=${query}&type=${type}`;
    const response = await fetch(url);
    if (!response.ok) {
      dispatch({
        type: 'ERROR',
        payload: `Something went wrong! Response status: ${response.status}`,
      });
      } else {
      const data = await response.json();
      dispatch({
        type: 'FETCH_POSTS',
        payload: data.data.children.map((c) => c.data),
      });
    }
  }