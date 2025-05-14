const express = require("express");
const userController = require("@/controllers/user.controller");
const router = express.Router();

const userModel = require("@/models/users.model");
const throwError = require("@/utils/throwError");
const attachResourceLoaders = require("@/utils/attachResourceLoaders");

attachResourceLoaders(router, ["user"]);

router.get("/", userController.getList);
router.get("/:user", userController.getOne);
router.post("/", userController.create);
router.put("/:user", userController.update);
router.delete("/:user", userController.remove);

module.exports = router;
