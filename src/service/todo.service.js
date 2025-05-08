const { readDb, writeDb } = require("../utils/db.util");
const RESOURCE = "todos";

const getAllTodo = async () => {
    const todos = await readDb(RESOURCE);
    return todos;
};

const getTodoById = async (id) => {
    const todos = await readDb(RESOURCE);
    const todo = todos.find((item) => item.id === +id);

    return todo;
};

const createTodo = async (data) => {
    const todos = await readDb(RESOURCE);

    const newTodo = {
        id: (todos[todos.length - 1]?.id ?? 0) + 1,
        title: data.title,
        isCompleted: data.isCompleted ?? false,
    };

    const updatedTodos = [...todos, newTodo];
    await writeDb(RESOURCE, updatedTodos);

    return newTodo;
};

const updateTodo = async (id, data) => {
    const todos = await readDb(RESOURCE);
    const todo = getTodoById(id);

    let updatedTodo = undefined;
    if (todo) {
        updatedTodo = {
            ...todo,
            title: data.title ?? todo.title,
            isCompleted:
                data.isCompleted !== undefined
                    ? data.isCompleted
                    : todo.isCompleted,
        };

        const updatedTodos = todos.map((item) =>
            item.id === +req.params.id ? updatedTodo : item
        );

        await writeDb(RESOURCE, updatedTodos);
    }

    return updatedTodo;
};

const deleteTodo = async (id) => {
    const todos = await readDb(RESOURCE);
    const exists = getTodoById(id);

    if (exists) {
        const updatedTodos = todos.filter((item) => item.id !== +id);
        await writeDb(RESOURCE, updatedTodos);
    }

    return exists;
};

module.exports = {
    getAllTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};
