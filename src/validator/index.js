const express = require("express");
const router = express.Router();

const productsRouter = require("./products.route");
const commentsRouter = require("./comments.route");
const postsRouter = require("./posts.route");
const categoryRouter = require("./categories.route");

router.use("/products", productsRouter);
router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoryRouter);

module.exports = router;
