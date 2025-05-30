const express = require("express");
const loginController = require("@/controllers/admin/auth/showLoginForm.controller");
const router = express.Router();

router.get("/login", loginController.showLoginForm);
router.post("/login", loginController.login);

module.exports = router;
