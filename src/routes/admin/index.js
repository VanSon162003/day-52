const express = require("express");
const router = express.Router();

const dashboardRouter = require("./dashboard.routes");
const postsRouter = require("./posts.routes");

const analyticsRouter = require("./analytics.routes");
const categoriesRouter = require("./categories.routes");

const productsRouter = require("./products.routes");
const topicsRouter = require("./topics.routes");

const commentsRouter = require("./comments.routes");
const usersRouter = require("./users.routes");

const settingsRouter = require("./settings.routes");
const accountSettingsRouter = require("./accountSettings.routes");
const loginRouter = require("./login.routes");
const registerRouter = require("./register.routes");
const forgotPasswordRouter = require("./showForgotForm.routes");
const resetPasswordRouter = require("./resetPassword.routes");

router.use("/", dashboardRouter);
router.use("/", postsRouter);
router.use("/", analyticsRouter);
router.use("/", categoriesRouter);
router.use("/", productsRouter);
router.use("/", topicsRouter);
router.use("/", commentsRouter);
router.use("/", usersRouter);
router.use("/", settingsRouter);
router.use("/", accountSettingsRouter);
router.use("/", loginRouter);
router.use("/", registerRouter);
router.use("/", forgotPasswordRouter);
router.use("/", resetPasswordRouter);

module.exports = router;
