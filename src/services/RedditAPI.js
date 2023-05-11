const BASE_URL = "https://www.reddit.com/";

export async function fetchPosts(dispatch, endpoint) {
  dispatch({
    type: "IS_LOADING",
  });
  const url = `https://www.reddit.com/${endpoint}/.json`;
  const response = await fetch(url);
  if (!response.ok) {
    dispatch({
      type: "ERROR",
      payload: `Something went wrong! Response status: ${response.status}`,
    });
  } else {
    const data = await response.json();
    dispatch({
      type: "FETCH_DATA",
      payload: data.data.children.map((c) => c.data),
    });
  }
}

export async function search(
  dispatch,
  term,
  type = "link",
  sort = "relevance",
  period = "all"
) {
  const url = `${BASE_URL}search/.json?q=${term}&type=${type}&sort=${sort}&t=${period}`;
  const response = await fetch(url);
  if (!response.ok) {
    dispatch({
      type: "ERROR",
      payload: `Something went wrong! Response status: ${response.status}`,
    });
  } else {
    const data = await response.json();
    dispatch({
      type: "FETCH_DATA",
      payload: data.data.children.map((c) => c.data),
    });
  }
}
