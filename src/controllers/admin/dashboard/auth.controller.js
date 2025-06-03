const usersService = require("@/service/users.service");
const md5 = require("md5");

exports.showLoginForm = (req, res) => {
    res.render("admin/layouts/auth/login", {
        layout: "admin/layouts/auth/login",
    });
};

exports.login = async (req, res) => {
    const password = md5(req.body.password);
    const email = req.body.email;

    const user = await usersService.getByEmailAndPassword(email, password);

    if (user) {
        req.session.userId = user.id;
        res.setFlash("success", "Đăng nhập thành công thành công!");

        res.redirect("/admin/");
    }
};

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
        res.setFlash("success", "Đăng ký thành công thành công!");

        res.redirect("/admin/login");
    }
};

exports.logout = async (req, res) => {
    delete req.session.userId;
    res.redirect("/admin/login");
};

exports.showResetForm = (req, res) => {
    res.render("admin/layouts/auth/resetPassword", {
        layout: "admin/layouts/auth/resetPassword",
    });
};

exports.showForgotForm = (req, res) => {
    res.render("admin/layouts/auth/forgotPassword", {
        layout: "admin/layouts/auth/forgotPassword",
    });
};
