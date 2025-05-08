const commentsService = require("@/service/comments.service");

const response = require("@/utils/response");
const throwError = require("@/utils/throwError");

const index = async (req, res) => {
    const comments = await commentsService.getAllComments();

    response.success(res, 200, comments);
};

const update = async (req, res) => {
    const updatedComment = await commentsService.updateComment(
        req.params.id,
        req.body
    );

    console.log(updatedComment);

    if (!updatedComment) throwError(404, "Resource not found");

    response.success(res, 200, updatedComment);
};

const destroy = async (req, res) => {
    const exists = await commentsService.deleteComment(req.params.id);

    if (!exists) throwError(404, "Resource not found");

    response.success(res, 204);
};

module.exports = {
    index,
    update,
    destroy,
};
