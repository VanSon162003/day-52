const express = require("express");
const learningPathController = require("@/controllers/api/learningPath.controller");
const router = express.Router();
const attachResourceLoaders = require("@/utils/attachResourceLoaders");

attachResourceLoaders(router, ["learning"]);

router.get("/", learningPathController.getList);
router.get("/:learning", learningPathController.getOne);
router.post("/", learningPathController.create);
router.put("/:learning", learningPathController.update);
router.delete("/:learning", learningPathController.remove);

module.exports = router;
