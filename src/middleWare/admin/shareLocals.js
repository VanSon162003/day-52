const usersService = require("@/service/users.service");

async function shareLocals(req, res, next) {
    const userId = req.session.userId;
    res.locals.auth = null;

    if (userId) {
        const user = await usersService.getById(userId);
        if (user) {
            res.locals.auth = user;
        }
    }

    res.locals.flash = req.session.flash;
    res.locals.getFlashMessages = (type = null) => {
        if (!req.session.flash) req.session.flash = [];

        if (type) {
            return req.session.flash
                .filter((item) => item.type === type)
                .map((item) => item.message);
        }

        return req.session.flash.map((item) => item.message);
    };

    delete req.session.flash;

    next();
}

module.exports = shareLocals;
