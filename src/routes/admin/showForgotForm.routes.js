const express = require("express");
const forgotPasswordController = require("@/controllers/admin/auth/showForgotForm.controller");
const router = express.Router();

router.get("/forgot-password", forgotPasswordController.showForgotForm);

module.exports = router;
