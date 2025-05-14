const coursesModel = require("@/models/courses.model");

class UsersService {
    async getAll() {
        const courses = await coursesModel.findAll();
        return courses;
    }

    async getById(id) {
        const course = await coursesModel.findById(id);

        return course;
    }

    async create(data) {
        const course = await coursesModel.create(data);
        return course;
    }

    async update(id, data) {
        const course = await coursesModel.update(id, data);
        return course;
    }

    async remove(id) {
        const course = await coursesModel.remove(id);
        return course;
    }
}

module.exports = new UsersService();
