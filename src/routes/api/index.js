const express = require("express");
const router = express.Router();

const productsRouter = require("./products.route");
const commentsRouter = require("./comments.route");
const postsRouter = require("./posts.route");
const categoryRouter = require("./categories.route");
const todoRouter = require("./todo.route");
const usersRouter = require("./users.route");
const coursesRouter = require("./courses.route");
const learningPathRouter = require("./learningPath.route");

router.use("/products", productsRouter);
router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoryRouter);
router.use("/todos", todoRouter);
router.use("/users", usersRouter);
router.use("/courses", coursesRouter);
router.use("/learning", learningPathRouter);

module.exports = router;
