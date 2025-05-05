const express = require("express");
const productController = require("../controllers/products.controller");
const {
    createProductsValidator,
    updateProductsValidator,
} = require("../validator/products.validator");
const router = express.Router();

router.get("/", productController.index);

router.get("/:id", productController.show);

router.post("/", createProductsValidator, productController.store);

router.put("/:id", updateProductsValidator, productController.update);

router.delete("/:id", productController.destroy);

module.exports = router;
