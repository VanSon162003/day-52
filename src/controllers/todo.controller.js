const { readDb, writeDb } = require("../../utils/db.util");
const RESOURCE = "todos";

const index = async (req, res) => {
    const todos = await readDb(RESOURCE);
    res.status(200).json({ status: "success", data: todos });
};

const show = async (req, res) => {
    const todos = await readDb(RESOURCE);
    const todo = todos.find((item) => item.id === +req.params.id);

    if (!todo) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    res.status(200).json({ status: "success", data: todo });
};

const store = async (req, res) => {
    const todos = await readDb(RESOURCE);

    const newTodo = {
        id: (todos[todos.length - 1]?.id ?? 0) + 1,
        title: req.body.title,
        isCompleted: req.body.isCompleted ?? false,
    };

    const updatedTodos = [...todos, newTodo];
    await writeDb(RESOURCE, updatedTodos);

    res.status(201).json({ status: "success", data: newTodo });
};

const update = async (req, res) => {
    const todos = await readDb(RESOURCE);
    const todo = todos.find((item) => item.id === +req.params.id);

    if (!todo) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedTodo = {
        ...todo,
        title: req.body.title ?? todo.title,
        isCompleted:
            req.body.isCompleted !== undefined
                ? req.body.isCompleted
                : todo.isCompleted,
    };

    const updatedTodos = todos.map((item) =>
        item.id === +req.params.id ? updatedTodo : item
    );

    await writeDb(RESOURCE, updatedTodos);

    res.status(200).json({ status: "success", data: updatedTodo });
};

const destroy = async (req, res) => {
    const todos = await readDb(RESOURCE);
    const exists = todos.find((item) => item.id === +req.params.id);

    if (!exists) {
        return res.status(404).json({
            status: "error",
            message: "resource not found",
        });
    }

    const updatedTodos = todos.filter((item) => item.id !== +req.params.id);
    await writeDb(RESOURCE, updatedTodos);

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
