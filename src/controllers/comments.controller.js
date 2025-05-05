const { readDb, writeDb } = require("../../utils/db.util");

const RESOURCE = "comments";
const index = async (req, res) => {
    const comments = await readDb(RESOURCE);

    res.json({ status: "success", data: comments });
};

const show = async (req, res) => {
    const comments = await readDb(RESOURCE);

    const comment = comments.find((comment) => comment.id === +req.params.id);

    if (!comment) {
        res.json({
            status: "error",
            message: "resource not found",
        });
        return;
    }

    res.json({ status: "success", data: comment });
};

const store = async (req, res) => {
    const comments = await readDb(RESOURCE);

    const newComment = {
        id: (comments[comments.length - 1]?.id ?? 0) + 1,
        name: req.body.name,
    };

    comments.push(newComment);

    await writeDb(RESOURCE, comments);

    res.json({ status: "success", data: newComment });
};

const update = async (req, res) => {
    const comments = await readDb(RESOURCE);
    const comment = comments.find((comment) => comment.id === +req.params.id);

    if (!comment) {
        res.json({
            status: "error",
            message: "resource not found",
        });
        return;
    }

    comment.name = req.body.name;

    await writeDb(RESOURCE, comments);

    res.json({ status: "success", data: comment });
};

const destroy = async (req, res) => {
    const comments = await readDb(RESOURCE);
    const index = comments.findIndex(
        (comment) => comment.id === +req.params.id
    );

    if (index === -1) {
        res.json({
            status: "error",
            message: "resource not found",
        });
        return;
    }

    comments.splice(index, 1);

    await writeDb(RESOURCE, comments);

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
