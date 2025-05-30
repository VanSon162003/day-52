const express = require("express");
const registerController = require("@/controllers/admin/auth/showRegisterForm.controller");
const router = express.Router();

router.get("/register", registerController.showRegisterForm);
router.post("/register", registerController.register);

module.exports = router;
