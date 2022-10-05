function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPosts() {
  return _fetch("https://jsonplaceholder.typicode.com/posts?_expand=user");
}

export function fetchPost(postId) {
  return _fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`
  );
}

export function fetchCommentsForPost(postId) {
  return _fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
}
