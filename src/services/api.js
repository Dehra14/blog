const API_URL = "http://localhost:3001/posts";

export const fetchPosts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createPost = async (post) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};

export const deletePost = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updatePost = async (id, updatedPost) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  });
};