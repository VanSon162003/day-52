const express = require("express");
const usersController = require("@/controllers/admin/dashboard/users.controller");
const router = express.Router();

router.get("/users", usersController.index);
router.get("/users/create", usersController.create);
router.get("/users/:id", usersController.show);
router.get("/users/:id/edit", usersController.edit);

module.exports = router;
