const express = require("express");
const settingsController = require("@/controllers/admin/dashboard/settings.controller");
const router = express.Router();

router.get("/settings", settingsController.index);

module.exports = router;
