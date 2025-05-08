const express = require("express");

const commentsController = require("../controllers/comments.controller");
const { updateCommentValidator } = require("@/validator/comments.validator");
const router = express.Router();

router.get("/", commentsController.index);

router.put("/:id", updateCommentValidator, commentsController.update);

router.delete("/:id", commentsController.destroy);

module.exports = router;
