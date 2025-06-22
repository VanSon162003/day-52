const express = require("express");
const categoryController = require("../../controllers/api/categories.controller");
const {
    createCategoryValidator,
    updateCategoryValidator,
} = require("../../validator/category.validator");
const router = express.Router();

router.get("/", categoryController.index);

router.get("/:id", categoryController.show);

router.post("/", createCategoryValidator, categoryController.store);

router.put("/:id", updateCategoryValidator, categoryController.update);

router.delete("/:id", categoryController.destroy);

module.exports = router;
