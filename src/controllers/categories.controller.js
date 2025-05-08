const { readDb, writeDb } = require("../utils/db.util");
const RESOURCE = "category";

const index = async (req, res) => {
    const categories = await readDb(RESOURCE);
    res.status(200).json({ status: "success", data: categories });
};

const show = async (req, res) => {
    const categories = await readDb(RESOURCE);
    const category = categories.find((item) => item.id === +req.params.id);

    if (!category) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    res.status(200).json({ status: "success", data: category });
};

const store = async (req, res) => {
    const categories = await readDb(RESOURCE);

    const newCategory = {
        id: (categories[categories.length - 1]?.id ?? 0) + 1,
        name: req.body.name,
        desc: req.body.desc,
    };

    const updatedCategories = [...categories, newCategory];
    await writeDb(RESOURCE, updatedCategories);

    res.status(201).json({ status: "success", data: newCategory });
};

const update = async (req, res) => {
    const categories = await readDb(RESOURCE);
    const category = categories.find((item) => item.id === +req.params.id);

    if (!category) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedCategory = {
        ...category,
        name: req.body.name ?? category.name,
        desc: req.body.desc ?? category.desc,
    };
    const updatedCategories = categories.map((item) =>
        item.id === +req.params.id ? updatedCategory : item
    );

    await writeDb(RESOURCE, updatedCategories);

    res.status(200).json({ status: "success", data: updatedCategory });
};

const destroy = async (req, res) => {
    const categories = await readDb(RESOURCE);
    const exists = categories.find((item) => item.id === +req.params.id);

    if (!exists) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedCategories = categories.filter(
        (item) => item.id !== +req.params.id
    );
    await writeDb(RESOURCE, updatedCategories);

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
