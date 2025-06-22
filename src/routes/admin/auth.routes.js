const express = require("express");
const authController = require("@/controllers/admin/dashboard/auth.controller");
const router = express.Router();

router.get("/login", authController.showLoginForm);
router.post("/login", authController.login);

router.get("/register", authController.showRegisterForm);
router.post("/register", authController.register);

router.get("/reset-password/:token", authController.showResetForm);

router.get("/forgot-password", authController.showForgotForm);

router.delete("/logout", authController.logout);
module.exports = router;
