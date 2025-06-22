const express = require("express");
const postsController = require("@/controllers/admin/dashboard/posts.controller");
const router = express.Router();

router.get("/posts", postsController.index);
router.get("/posts/create", postsController.create);

router.get("/posts/:id", postsController.show);
router.get("/posts/:id/edit", postsController.edit);

module.exports = router;
