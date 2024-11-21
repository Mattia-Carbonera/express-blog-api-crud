const express = require("express");
const router = express.Router();

// array di post
const post = require("../db/postArray");

// postsController
const postsController = require("../controller/postsController");

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.patch("/:id", postsController.modify);
router.delete("/:id", postsController.detroy);

module.exports = router;
