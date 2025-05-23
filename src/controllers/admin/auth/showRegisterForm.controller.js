exports.showRegisterForm = (req, res) => {
    res.render("admin/layouts/auth/register", {
        layout: "admin/layouts/auth/register",
    });
};
