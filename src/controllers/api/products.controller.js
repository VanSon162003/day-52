const { readDb, writeDb } = require("../../utils/db.util");
const RESOURCE = "products";

const index = async (req, res) => {
    const products = await readDb(RESOURCE);
    res.status(200).json({ status: "success", data: products });
};

const show = async (req, res) => {
    const products = await readDb(RESOURCE);
    const product = products.find((item) => item.id === +req.params.id);

    if (!product) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    res.status(200).json({ status: "success", data: product });
};

const store = async (req, res) => {
    const products = await readDb(RESOURCE);

    const newProduct = {
        id: (products[products.length - 1]?.id ?? 0) + 1,
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
    };

    const updatedProducts = [...products, newProduct];
    await writeDb(RESOURCE, updatedProducts);

    res.status(201).json({ status: "success", data: newProduct });
};

const update = async (req, res) => {
    const products = await readDb(RESOURCE);
    const product = products.find((item) => item.id === +req.params.id);

    if (!product) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedProduct = {
        ...product,
        name: req.body.name ?? product.name,
        price: req.body.price ?? product.price,
        desc: req.body.desc ?? product.desc,
    };

    const updatedProducts = products.map((item) =>
        item.id === +req.params.id ? updatedProduct : item
    );

    await writeDb(RESOURCE, updatedProducts);

    res.status(200).json({ status: "success", data: updatedProduct });
};

const destroy = async (req, res) => {
    const products = await readDb(RESOURCE);
    const exists = products.find((item) => item.id === +req.params.id);

    if (!exists) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedProducts = products.filter(
        (item) => item.id !== +req.params.id
    );
    await writeDb(RESOURCE, updatedProducts);

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
