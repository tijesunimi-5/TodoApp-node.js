export const createPost = (req, res) => {
  console.log(req.body);
  res.json({ data: req.body, message: "This is a route to create post" });
};

export const getPost = (req, res) => {
  res.json({ message: "This is a route to get post" });
};

export const updatePost = (req, res) => {
  res.json({ message: "This is a route to update post" });
};

export const deletePost = (req, res) => {
  res.json({ message: "This is a route to delete post" });
};
