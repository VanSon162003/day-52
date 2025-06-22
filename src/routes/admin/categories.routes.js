const express = require("express");
const categoriesController = require("@/controllers/admin/dashboard/categories.controller");
const router = express.Router();

router.get("/categories", categoriesController.index);

module.exports = router;
