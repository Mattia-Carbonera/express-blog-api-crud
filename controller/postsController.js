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

  if (!searchedPost) {
    return res.status(404).json({
      error: "Post not found",
    });
  }

  res.json([`Visualizzo un elemento: ${index}`, searchedPost]);
}

// # store
function store(req, res) {
  const index = req.body;

  const newId = parseInt(post.at(-1).id) + 1;

  if (!title || !content || !image || !tags.length) {
    return res.status(404).json({ error: "Check params" });
  }

  const { title, content, image, tags } = index;

  const newPost = {
    id: newId,
    Title: title,
    Content: content,
    Image: image,
    Tags: tags,
  };

  post.push(newPost);

  // console.log(newPost);

  res.json("Creo un nuovo elemento");
}

// # update
function update(req, res) {
  const index = req.body;

  const { title, content, image, tags } = index;

  const newPost = {
    id: newId,
    Title: title,
    Content: content,
    Image: image,
    Tags: tags,
  };

  post.push(newPost);

  // console.log(newPost);

  res.json(`Modifico interamente un elemento: ${index}`);
}

// # modify
function modify(req, res) {
  const index = req.params.id;

  res.json(`Modifico parzialmente un elemento: ${index}`);
}

// # detroy
function detroy(req, res) {
  const index = parseInt(req.params.id);

  const selectedPost = post.find(
    (currentPost) => parseInt(currentPost.id) === index
  );

  if (!selectedPost) {
    console.log('error 204: "No Content"');
    return res.status(204).json({
      error: "No Content",
    });
  }

  const postIndex = post.indexOf(selectedPost);

  const deletedPost = post.splice(postIndex, 1);

  console.log(post);
  res.json(deletedPost);
}

module.exports = { index, show, store, update, modify, detroy };
