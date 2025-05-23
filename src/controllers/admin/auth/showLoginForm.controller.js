exports.showLoginForm = (req, res) => {
    res.render("admin/layouts/auth/login", {
        layout: "admin/layouts/auth/login",
    });
};
