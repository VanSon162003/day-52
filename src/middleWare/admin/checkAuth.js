function checkAuth(req, res, next) {
    const publicPaths = [
        /^\/register$/,
        /^\/login$/,
        /^\/reset-password\/[^\/]+$/, // động với :id
        /^\/forgot-password$/,
        /^\/verify-email$/,
    ];

    const isAuthRequired = !publicPaths.some((regex) => regex.test(req.path));

    if (!res.locals.auth && isAuthRequired) {
        return res.redirect("/admin/login");
    }

    // Thêm block if này để kiểm tra:More actions
    // 1. Nếu user đã đăng nhập, và:
    // 2. Nếu user chưa xác minh email, và:
    // 3. Nếu user truy cập vào một trang cần xác thực mới được phép vào

    if (res.locals.auth && !res.locals.auth.verified_at && isAuthRequired) {
        res.setFlash(
            "error",
            "Vui lòng xác minh tài khoản trước khi đăng nhập!"
        );
        return res.redirect("/admin/login");
    }

    if (res.locals.auth && !isAuthRequired && res.locals.auth.verified_at) {
        return res.redirect("/admin/");
    }

    next();
}

module.exports = checkAuth;
