const express = require("express");
const commentsController = require("@/controllers/admin/dashboard/comments.controller");
const router = express.Router();

router.get("/comments", commentsController.index);
router.get("/comments/:id", commentsController.show);
router.get("/comments/:id/edit", commentsController.edit);
router.get("/comments/create", commentsController.create);

module.exports = router;
