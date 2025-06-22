const express = require("express");
const topicsController = require("@/controllers/admin/dashboard/topics.controller");
const router = express.Router();

router.get("/topics", topicsController.index);

module.exports = router;
