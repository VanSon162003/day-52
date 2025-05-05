const { readDb, writeDb } = require("../../utils/db.util");
const RESOURCE = "posts";

const index = async (req, res) => {
    const posts = await readDb(RESOURCE);
    res.status(200).json({ status: "success", data: posts });
};

const show = async (req, res) => {
    const posts = await readDb(RESOURCE);
    const post = posts.find((post) => post.id === +req.params.id);

    if (!post) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    res.status(200).json({ status: "success", data: post });
};

const store = async (req, res) => {
    const posts = await readDb(RESOURCE);

    const newPost = {
        id: (posts[posts.length - 1]?.id ?? 0) + 1,
        name: req.body.name,
    };

    const updatedPosts = [...posts, newPost];
    await writeDb(RESOURCE, updatedPosts);

    res.status(201).json({ status: "success", data: newPost });
};

const update = async (req, res) => {
    const posts = await readDb(RESOURCE);
    const post = posts.find((post) => post.id === +req.params.id);

    if (!post) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedPost = { ...post, name: req.body.name };
    const updatedPosts = posts.map((p) =>
        p.id === +req.params.id ? updatedPost : p
    );

    await writeDb(RESOURCE, updatedPosts);

    res.status(200).json({ status: "success", data: updatedPost });
};

const destroy = async (req, res) => {
    const posts = await readDb(RESOURCE);
    const exists = posts.find((post) => post.id === +req.params.id);

    if (!exists) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedPosts = posts.filter((post) => post.id !== +req.params.id);
    await writeDb(RESOURCE, updatedPosts);

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
