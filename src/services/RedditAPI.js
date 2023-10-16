const BASE_URL = "https://www.reddit.com/";

export async function search(
  dispatch,
  term,
  type,
  sort,
  period,
) {
  const url = makeUrl(term, type, sort, period);
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

export async function fetchComments(dispatch, path) {
  if (path === "")
    return
  const url = `${BASE_URL}${path}.json`
  const response = await fetch(url);
  if (!response.ok) {
    dispatch({
      type: "ERROR",
      payload: `Something went wrong! Response status: ${response.status}`,
    });
  } else {
    const data = await response.json();
    dispatch({
      type: "FETCH_POST_DETAILS",
      payload: data,
    });
  }
}

function makeUrl(term, type, sort, period) {
  if (term === "") {
    if (sort === "best") 
      return `${BASE_URL}/r/popular/top/.json?t=${period}`
    return `${BASE_URL}/r/popular/new/.json`
  }
  return `${BASE_URL}search/.json?q=${term}&type=${type}&sort=${sort}&t=${period}`;
}
