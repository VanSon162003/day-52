const express = require("express");
const coursesController = require("@/controllers/api/courses.controller");
const router = express.Router();
const attachResourceLoaders = require("@/utils/attachResourceLoaders");

attachResourceLoaders(router, ["course"]);

router.get("/", coursesController.getList);
router.get("/:course", coursesController.getOne);
router.post("/", coursesController.create);
router.put("/:course", coursesController.update);
router.delete("/:course", coursesController.remove);

module.exports = router;
