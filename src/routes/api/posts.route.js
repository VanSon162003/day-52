const express = require("express");
const postsController = require("../../controllers/api/posts.controller");
const {
    updatePostValidator,
    createPostValidator,
} = require("../../validator/posts.validator");
const { createCommentValidator } = require("@/validator/comments.validator");
const router = express.Router();

// router.get("/", postsController.index);
router.get("/", postsController.getList);

router.get("/:id/comments", postsController.getCommentByPostId);

router.get("/:id", postsController.show);

router.post("/", createPostValidator, postsController.store);
router.post(
    "/:id/comments",
    createCommentValidator,
    postsController.createCommentByPostId
);

router.put("/:id", updatePostValidator, postsController.update);

router.delete("/:id", postsController.destroy);

module.exports = router;
