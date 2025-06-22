const throwError = require("@/utils/throwError");
const todoService = require("@/service/todo.service");
const response = require("@/utils/response");

const index = async (req, res) => {
    const todos = await todoService.getAllTodo();
    response.success(res, 200, todos);
};

const show = async (req, res) => {
    const todo = await todoService.getTodoById(req.params.id);

    if (!todo) throwError(404, "resource not found");

    response.success(res, 200, todo);
};

const store = async (req, res) => {
    const newTodo = await todoService.createTodo(req.body);

    response.success(res, 201, newTodo);
};

const update = async (req, res) => {
    const updatedTodo = await todoService.updateTodo(req.params.id, req.body);

    if (!updatedTodo) {
        throwError(404, "resource not found");
    }

    response.success(res, 200, updatedTodo);
};

const destroy = async (req, res) => {
    const exists = await todoService.deleteTodo(req.params.id);

    if (!exists) {
        throwError(404, "resource not found");
    }

    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
