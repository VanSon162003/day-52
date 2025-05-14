const db = require("@/configs/db");

exports.findAll = async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;

    const [posts] = await db.query("select * from posts limit ? offset ?", [
        limit,
        offset,
    ]);
    return posts;
};

exports.count = async () => {
    const [total] = await db.query("select count(*) as total from posts");

    return total[0].total;
};
