const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findAll = async () => {
    const [learningPath] = await db.query("select * from learning_path");
    return learningPath;
};

exports.findById = async (id) => {
    const [learningPath] = await db.query(
        `select * from learning_path where id = ? `,
        [id]
    );

    return learningPath[0];
};

exports.create = async (data) => {
    const { columns, placeholders, values } = buildInsertQuery(data);

    const query = `INSERT INTO learning_path (${columns}) VALUES (${placeholders});`;
    const [{ insertId }] = await db.query(query, values);

    return {
        id: insertId,
        ...data,
    };
};

exports.update = async (id, data) => {
    const { setClause, values } = buildUpdateQuery(data);

    values.push(id);

    const query = `UPDATE learning_path SET ${setClause} WHERE id = ?;`;
    await db.query(query, values);

    return {
        id,
        ...data,
    };
};

exports.remove = async (id) => {
    const [{ affectedRows }] = await db.query(
        `delete from learning_path where id = ?`,
        [id]
    );
    return affectedRows > 0;
};
