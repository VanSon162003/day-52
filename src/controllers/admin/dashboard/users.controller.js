const usersService = require("@/service/users.service");
const loadEmail = require("@/utils/loadEmail");
const queue = require("@/utils/queue");

exports.index = async (req, res) => {
    const users = await usersService.getAll();

    res.render("admin/users", {
        users,
    });
};

exports.show = async (req, res) => {
    res.render("admin/users/show");
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    const user = await usersService.getById(id);

    res.render("admin/users/edit", { id, user, errors: {}, old: {} });
};

exports.create = async (req, res) => {
    res.render("admin/users/create", {
        old: {},
        errors: {},
    });
};

exports.store = async (req, res) => {
    const { confirm_password, ...body } = req.body;

    await usersService.create(body);

    res.setFlash("success", "Tạo mới thành công!");
    res.setFlash("info", "Tạo mới thành công!");
    res.setFlash("error", "Tạo mới thành công!");
    res.setFlash("warning", "Tạo mới thành công!");

    res.redirect("/admin/users");
};

exports.update = async (req, res) => {
    const { confirm_password, ...body } = req.body;
    const id = req.params.id;

    await usersService.update(id, body);

    res.setFlash("success", "cập nhật thành công!");

    res.redirect("/admin/users");
};

exports.softDelete = async (req, res) => {
    const id = req.params.id;

    await usersService.remove(id);
    res.setFlash("success", "Xoá thành công!");

    res.redirect("/admin/users");
};
