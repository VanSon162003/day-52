const sessionModel = require("@/models/sessions.model");
const { randomUUID } = require("node:crypto");

async function handleSession(req, res, next) {
    // let _id = req.cookies.id;

    // let session = _id && (await sessionModel.findById(req.cookies.id));

    // if (!session) {
    //     _id = randomUUID();
    //     const date = new Date();
    //     date.setDate(date.getDate() + 7);
    //     session = await sessionModel.create({ id: _id, expires_at: date });

    //     res.set("Set-Cookie", `sid=${_id}; path=/; httpOnly; expires=${date}`);
    // }
    // const sessionData = JSON.parse(session.data ?? null) ?? {};

    // req.session = {
    //     get(key) {
    //         return sessionData[key] ?? null;
    //     },

    //     set(key, value) {
    //         sessionData[key] = value;
    //         sessionModel.update(_id, {
    //             data: JSON.stringify(sessionData),
    //         });
    //     },
    // };

    next();
}

module.exports = handleSession;
