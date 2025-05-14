const commentsService = require("@/service/comments.service");
const postsService = require("@/service/posts.service");
const response = require("@/utils/response");
const throwError = require("@/utils/throwError");

const index = async (req, res) => {
    const posts = await postsService.getAllPost();
    response.success(res, 200, posts, "");
};

const getList = async (req, res) => {
    const page = req.query.page;

    const posts = await postsService.getAll(page);
    response.success(res, 200, posts);
};

const getCommentByPostId = async (req, res) => {
    const comments = await commentsService.getCommentByPostId(req.params.id);
    response.success(res, 200, comments);
};

const createCommentByPostId = async (req, res) => {
    const comment = await commentsService.createCommentByPostId(
        req.params.id,
        req.body
    );
    response.success(res, 200, comment);
};

const show = async (req, res) => {
    const post = await postsService.getPostById(req.params.id);

    if (!post) throwError(404, "Resource not found");

    response.success(res, 200, post);
};

const store = async (req, res) => {
    const newPost = await postsService.createPost(req.body);

    response.success(res, 201, newPost);
};

const update = async (req, res) => {
    const updatedPost = await postsService.updatePost(req.params.id, req.body);

    if (!updatedPost) throwError(404, "Resource not found");

    response.success(res, 200, updatedPost);
};

const destroy = async (req, res) => {
    const exists = await postsService.deletePost(req.params.id);

    if (!exists) throwError(404, "Resource not found");

    response.success(res, 204);
};

module.exports = {
    index,
    getList,
    getCommentByPostId,
    createCommentByPostId,
    show,
    store,
    update,
    destroy,
};
