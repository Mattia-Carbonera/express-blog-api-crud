// array di post
const post = require("../db/postArray");

// # index
function index(req, res) {
  const { tag } = req.query;

  if (tag) {
    let tagContent = post.filter((post) => post.Tags.includes(tag));
    return res.json(tagContent);
  }

  res.json(["Visualizzo tutti gli elementi", post]);
}

// # show
function show(req, res) {
  const index = req.params.id;

  const searchedPost = post.find((post) => post.id.includes(index));
  console.log(searchedPost);

  // controllo dei post
  if (!searchedPost) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  // -----------

  res.json([`Visualizzo un elemento: ${index}`, searchedPost]);
}

// # store
function store(req, res) {
  const param = req.body;

  const newId = parseInt(post.at(-1).id) + 1;

  const { title, content, image, tags } = param;

  if (!title || !content || !image || !tags.length) {
    return res.status(400).json({ error: "Check params" });
  }

  const newPost = {
    id: newId,
    Title: title,
    Content: content,
    Image: image,
    Tags: tags,
  };

  post.push(newPost);

  console.log(newPost);

  res.json(post);
}

// # update
function update(req, res) {
  const index = req.params.id;
  const param = req.body;

  const { title, content, image, tags } = param;

  const thisPost = post.find((post) => post.id == index);

  const searchedPost = post.find((post) => post.id.includes(index));

  // controllo dei post
  if (!searchedPost) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  // -----------

  // controllo dei parametri
  thisPost.id = index;
  if (title) thisPost.Title = title;
  if (content) thisPost.Content = content;
  if (image) thisPost.Image = image;
  if (tags) thisPost.Tags = tags;

  console.log(thisPost);

  res.json(post);
}

// # modify
function modify(req, res) {
  const index = req.params.id;

  const searchedPost = post.find((post) => post.id.includes(index));
  console.log(searchedPost);

  // controllo dei post
  if (!searchedPost) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  // -----------

  res.json(`Modifico parzialmente un elemento`);
}

// # detroy
function detroy(req, res) {
  const index = parseInt(req.params.id);

  const selectedPost = post.find(
    (currentPost) => parseInt(currentPost.id) === index
  );

  // controllo dei post
  if (!selectedPost) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  // -----------

  const postIndex = post.indexOf(selectedPost);

  const deletedPost = post.splice(postIndex, 1);

  console.log(post);
  res.json(deletedPost);
}

module.exports = { index, show, store, update, modify, detroy };
