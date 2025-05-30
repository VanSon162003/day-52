const usersService = require("@/service/users.service");
const md5 = require("md5");

exports.showRegisterForm = (req, res) => {
    res.render("admin/layouts/auth/register", {
        layout: "admin/layouts/auth/register",
    });
};

exports.register = async (req, res) => {
    const user = await usersService.create({
        email: req.body.email,
        password: md5(req.body.password),
    });

    if (user) {
        res.redirect("/admin/login");
    }
};
