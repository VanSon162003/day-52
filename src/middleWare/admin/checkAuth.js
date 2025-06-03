function checkAuth(req, res, next) {
    const isAuthRequired = !["/register", "/login"].includes(req.path);

    if (!res.locals.auth && isAuthRequired) {
        return res.redirect("/admin/login");
    }

    if (res.locals.auth && !isAuthRequired) {
        return res.redirect("/admin/");
    }

    next();
}

module.exports = checkAuth;
