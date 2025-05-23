const express = require("express");
const resetPasswordController = require("@/controllers/admin/auth/showResetForm.controller");
const router = express.Router();

router.get("/reset-password/:token", resetPasswordController.showResetForm);

module.exports = router;
