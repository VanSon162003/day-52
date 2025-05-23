const usersService = require("@/service/users.service");
const response = require("@/utils/response");
const throw404 = require("@/utils/throwError");

exports.getList = async (req, res) => {
    const users = await usersService.getAll();
    response.success(res, 200, users);
};

exports.getOne = async (req, res) => {
    response.success(res, 200, req.user);
};

exports.create = async (req, res) => {
    const user = await usersService.create(req.body);
    response.success(res, 201, user);
};

exports.update = async (req, res) => {
    // const existingUser = await usersService.getById(req.user.id);

    const user = await usersService.update(req.user.id, req.body);
    response.success(res, 200, user);
};

exports.remove = async (req, res) => {
    // const existingUser = await usersService.getById(req.user.id);

    await usersService.remove(req.user.id);
    response.success(res, 204);
};
