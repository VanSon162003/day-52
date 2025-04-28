const express = require("express");
const router = express.Router();

const products = [
    {
        id: 1,
        name: "product 1",
    },
    {
        id: 2,
        name: "product 2",
    },
];

router.get("/", (req, res) => {
    res.json({
        data: products,
    });
});

router.get("/:id", (req, res) => {
    res.json({
        data: products.find((prod) => prod.id === +req.params.id),
    });
});

router.post("/", (req, res) => {
    products.push({
        id: 3,
        name: req.body.name,
    });

    res.json({ data: products });
});

router.put("/", (req, res) => {
    const id = +req.params.id;

    res.json({ data: products });
});

module.exports = router;
