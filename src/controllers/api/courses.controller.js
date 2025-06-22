const coursesService = require("@/service/courses.service");
const response = require("@/utils/response");

exports.getList = async (req, res) => {
    const courses = await coursesService.getAll();
    response.success(res, 200, courses);
};

exports.getOne = async (req, res) => {
    response.success(res, 200, req.course);
};

exports.create = async (req, res) => {
    const course = await coursesService.create(req.body);
    response.success(res, 201, course);
};

exports.update = async (req, res) => {
    const course = await coursesService.update(req.course.id, req.body);
    response.success(res, 200, { ...req.course, ...course });
};

exports.remove = async (req, res) => {
    await coursesService.remove(req.course.id);
    response.success(res, 204);
};
