const throwError = require("@/utils/throwError");
const { readDb, writeDb } = require("../utils/db.util");
const RESOURCE = "comments";

const getAllComments = async () => {
    const comments = await readDb(RESOURCE);

    return comments;
};

const getCommentById = async (id) => {
    const comments = await readDb(RESOURCE);
    const comment = comments.find((item) => item.id === +id);

    return comment;
};

const getCommentByPostId = async (postId) => {
    if (Number.isNaN(+postId)) throwError(400, "invalid postId");

    const comments = await getAllComments();

    const commentByPostId = comments.filter(
        (comment) => +comment.postId === +postId
    );

    return commentByPostId;
};

const createCommentByPostId = async (postId, data) => {
    if (Number.isNaN(+postId)) throwError(400, "invalid postId");

    const comments = await getAllComments();

    const newComments = {
        id: (comments[comments.length - 1]?.id ?? 0) + 1,
        comment: data.comment,
        name: data.name,
        postId,
    };

    const createComment = [...comments, newComments];

    await writeDb(RESOURCE, createComment);

    return newComments;
};

const updateComment = async (id, data) => {
    const comments = await readDb(RESOURCE);
    const comment = await getCommentById(id);

    let updatedComment = undefined;

    if (comment) {
        updatedComment = {
            ...comment,
            comment: data.comment ?? comment.comment,
            name: data.name ?? comment.name,
        };

        const updatedComments = comments.map((item) =>
            item.id === +id ? updatedComment : item
        );

        await writeDb(RESOURCE, updatedComments);
    }

    return updatedComment;
};

const deleteComment = async (id) => {
    const comments = await readDb(RESOURCE);
    const exists = await getCommentById(id);

    if (exists) {
        const updateComment = comments.filter((item) => item.id !== +id);
        await writeDb(RESOURCE, updateComment);
    }

    return exists;
};

module.exports = {
    getAllComments,
    getCommentByPostId,
    createCommentByPostId,
    getCommentById,
    updateComment,
    deleteComment,
};
