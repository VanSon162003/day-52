const learningPathService = require("@/service/learningPath.service");
const response = require("@/utils/response");

exports.getList = async (req, res) => {
    const learningPath = await learningPathService.getAll();
    response.success(res, 200, learningPath);
};

exports.getOne = async (req, res) => {
    response.success(res, 200, req.learning);
};

exports.create = async (req, res) => {
    const learning = await learningPathService.create(req.body);
    response.success(res, 201, learning);
};

exports.update = async (req, res) => {
    const learning = await learningPathService.update(
        req.learning.id,
        req.body
    );

    response.success(res, 200, { ...req.learning, ...learning });
};

exports.remove = async (req, res) => {
    await learningPathService.remove(req.learning.id);
    response.success(res, 204);
};
