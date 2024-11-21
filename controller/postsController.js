// array di post
const post = require("../db/postArray");

// # index
function index(req, res) {
  res.json(["Visualizzo tutti gli elementi", post]);
}

// # show
function show(req, res) {
  const index = req.params.id;
  const selectedEl = post[index];

  if (index > post.length) res.json("Post inesistente");

  res.json([`Visualizzo un elemento: ${index}`, selectedEl]);
}

// # store
function store(req, res) {
  const index = req.params.id;

  res.json("Creo un nuovo elemento");
}

// # update
function update(req, res) {
  const index = req.params.id;

  res.json(`Modifico interamente un elemento: ${index}`);
}

// # modify
function modify(req, res) {
  const index = req.params.id;

  res.json(`Modifico parzialmente un elemento: ${index}`);
}

// # detroy
function detroy(req, res) {
  const index = req.params.id;

  res.json(`Elimino un elemento: ${index}`);
}

module.exports = { index, show, store, update, modify, detroy };
