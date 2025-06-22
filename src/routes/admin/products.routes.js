const express = require("express");
const productsController = require("@/controllers/admin/dashboard/products.controller");
const router = express.Router();

router.get("/products", productsController.index);
router.get("/products/create", productsController.create);
router.get("/products/:id", productsController.show);
router.get("/products/:id/edit", productsController.edit);

module.exports = router;
