const sessionsService = require("@/service/admin/sessions.service");
const { randomUUID } = require("node:crypto");
const { type } = require("node:os");

async function session(req, res, next) {
    let _sid = req.cookies.sid;
    let session = _sid && (await sessionsService.getById(req.cookies.sid));

    if (!session) {
        _sid = randomUUID();
        const date = new Date();
        date.setDate(date.getDate() + 7);

        const isProduction = process.env.NODE_ENV === "production";

        session = await sessionsService.create({
            id: _sid,
            expires_at: date,
        });

        res.cookie("sid", _sid, {
            expires: date,
            httpOnly: true,
            secure: isProduction,
        });
    }

    req.session = JSON.parse(session.data ?? null) ?? {};

    res.setFlash = (type, message) => {
        const data = {
            type,
            message,
        };

        if (!req.session.flash) req.session.flash = [];
        req.session.flash = [...req.session.flash, data];
    };

    res.on("finish", () => {
        sessionsService.update(_sid, {
            data: JSON.stringify(req.session),
        });
    });

    next();
}
module.exports = session;
