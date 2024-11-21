const express = require("express");
const router = express.Router();

const post = require("../db/postArray");

router.get("/", (req, res) => {
  let totalPost = 0;
  post.forEach((post) => (totalPost += 1));

  res.json([post, "Total Post: " + parseInt(totalPost)]);
});

module.exports = router;
