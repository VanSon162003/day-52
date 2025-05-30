const sessionsService = require("@/service/admin/sessions.service");
const { randomUUID } = require("node:crypto");

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

    const sessionData = JSON.parse(session.data ?? null) ?? {};

    req.session = {
        get(key) {
            return sessionData[key] ?? null;
        },

        set(key, value) {
            (sessionData[key] = value),
                sessionsService.update(_sid, {
                    data: JSON.stringify(sessionData),
                });
        },
    };

    next();
}
module.exports = session;
