const express = require("express");
const { readDb, writeDb } = require("../utils/file.until");
const router = express.Router();

const RESOURCE = "posts";

router.get("/", async (req, res) => {
    const posts = await readDb(RESOURCE);

    res.json({ status: "success", data: posts });
});

router.get("/:id", async (req, res) => {
    const posts = await readDb(RESOURCE);

    const comment = posts.find((comment) => comment.id === +req.params.id);

    if (!comment) {
        res.json({
            status: "error",
            message: "resource not found",
        });
        return;
    }

    res.json({ status: "success", data: comment });
});

router.post("/", async (req, res) => {
    const posts = await readDb(RESOURCE);

    const newComment = {
        id: (posts[posts.length - 1]?.id ?? 0) + 1,
        name: req.body.name,
    };

    posts.push(newComment);

    await writeDb(RESOURCE, posts);

    res.json({ status: "success", data: newComment });
});

router.put("/:id", async (req, res) => {
    const posts = await readDb(RESOURCE);
    const comment = posts.find((comment) => comment.id === +req.params.id);

    if (!comment) {
        res.json({
            status: "error",
            message: "resource not found",
        });
        return;
    }

    comment.name = req.body.name;

    await writeDb(RESOURCE, posts);

    res.json({ status: "success", data: comment });
});

router.delete("/:id", async (req, res) => {
    const posts = await readDb(RESOURCE);
    const index = posts.findIndex((comment) => comment.id === +req.params.id);

    if (index === -1) {
        res.json({
            status: "error",
            message: "resource not found",
        });
        return;
    }

    posts.splice(index, 1);

    await writeDb(RESOURCE, posts);

    res.status(204).send();
});

module.exports = router;
