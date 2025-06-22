const express = require("express");
const usersController = require("@/controllers/admin/dashboard/users.controller");
const {
    userValidators,
    userUpdateValidators,
} = require("@/validator/admin/users.validator");
const router = express.Router();

router.get("/users", usersController.index);
router.get("/users/create", usersController.create);
router.post("/users", userValidators, usersController.store);
router.get("/users/:id", usersController.show);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id", userUpdateValidators, usersController.update);
router.delete("/users/:id/delete", usersController.softDelete);

module.exports = router;
