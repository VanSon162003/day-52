const sessionsModel = require("@/models/sessions.model");
const throwError = require("@/utils/throwError");

class SessionService {
    async getById(id) {
        const session = await sessionsModel.findById(id);

        return session;
    }

    async create(data) {
        const session = await sessionsModel.create(data);
        return session;
    }

    async update(id, data) {
        const session = await sessionsModel.update(id, data);
        return session;
    }
}

module.exports = new SessionService();
