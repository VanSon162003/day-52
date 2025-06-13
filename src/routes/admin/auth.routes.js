const express = require("express");
const authController = require("@/controllers/admin/dashboard/auth.controller");
const router = express.Router();

router.get("/login", authController.showLoginForm);
router.post("/login", authController.login);

router.get("/register", authController.showRegisterForm);
router.post("/register", authController.register);

router.get("/verify-email", authController.verifyEmail);

router.get("/reset-password/:id", authController.showResetForm);
router.post("/reset-password/:id", authController.resetPassword);

router.get("/forgot-password", authController.showForgotForm);
router.post("/forgot-password", authController.forgotPassword);

router.post("/change-password/:id", authController.changPassword);

router.delete("/logout", authController.logout);
module.exports = router;
