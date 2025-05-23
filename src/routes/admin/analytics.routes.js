const express = require("express");
const analyticsController = require("@/controllers/admin/dashboard/analytics.controller");
const router = express.Router();

router.get("/analytics", analyticsController.index);
module.exports = router;
