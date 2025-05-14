const learningPathModel = require("@/models/learningPath.model");

class UsersService {
    async getAll() {
        const learningPath = await learningPathModel.findAll();
        return learningPath;
    }

    async getById(id) {
        const lp = await learningPathModel.findById(id);

        return lp;
    }

    async create(data) {
        const lp = await learningPathModel.create(data);
        return lp;
    }

    async update(id, data) {
        const lp = await learningPathModel.update(id, data);
        console.log(lp);

        return lp;
    }

    async remove(id) {
        const lp = await learningPathModel.remove(id);
        return lp;
    }
}

module.exports = new UsersService();
