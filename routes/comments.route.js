const express = require("express");
const { readDb, writeDb } = require("../utils/file.until");
const router = express.Router();

const RESOURCE = "comments";

router.get("/", async (req, res) => {
    const comments = await readDb(RESOURCE);

    res.json({ status: "success", data: comments });
});

router.get("/:id", async (req, res) => {
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
});

router.post("/", async (req, res) => {
    const comments = await readDb(RESOURCE);

    const newComment = {
        id: (comments[comments.length - 1]?.id ?? 0) + 1,
        name: req.body.name,
    };

    comments.push(newComment);

    await writeDb(RESOURCE, comments);

    res.json({ status: "success", data: newComment });
});

router.put("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
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
});

module.exports = router;
