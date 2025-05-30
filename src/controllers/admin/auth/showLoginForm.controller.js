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
        req.session.set("userId", user.id);
        res.redirect("/admin/");
    }
};
