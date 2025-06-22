const express = require("express");
const accountSettingsController = require("@/controllers/admin/dashboard/accountSettings.controller");
const router = express.Router();

router.get("/account-settings", accountSettingsController.index);

module.exports = router;
