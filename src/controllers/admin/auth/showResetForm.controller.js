exports.showResetForm = (req, res) => {
    res.render("admin/layouts/auth/resetPassword", {
        layout: "admin/layouts/auth/resetPassword",
    });
};
