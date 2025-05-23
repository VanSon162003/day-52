exports.showForgotForm = (req, res) => {
    res.render("admin/layouts/auth/forgotPassword", {
        layout: "admin/layouts/auth/forgotPassword",
    });
};
