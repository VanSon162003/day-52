const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findById = async (id) => {
    const [session] = await db.query(
        `select * from sessions where id = ? and expires_at > now() `,
        [id]
    );

    return session[0];
};

exports.create = async (data) => {
    const { columns, placeholders, values } = buildInsertQuery(data);

    const query = `INSERT INTO sessions (${columns}) VALUES (${placeholders});`;
    const [{ insertId }] = await db.query(query, values);

    return {
        id: insertId,
        ...data,
    };
};

exports.update = async (id, data) => {
    const { setClause, values } = buildUpdateQuery(data);

    values.push(id);

    const query = `UPDATE sessions SET ${setClause} WHERE id = ?;`;
    await db.query(query, values);

    return {
        id,
        ...data,
    };
};

exports.remove = async (id) => {
    const [{ affectedRows }] = await db.query(
        `delete from sessions where id = ?`,
        [id]
    );
    return affectedRows > 0;
};
