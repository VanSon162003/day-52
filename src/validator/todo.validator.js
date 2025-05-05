const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("./handlerValidatorErrors");

exports.createTodoValidator = [
    checkSchema({
        title: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },

        isCompleted: {
            notEmpty: {
                errorMessage: "trường này không được để trống",
            },
            isBoolean: {
                errorMessage: "trường này phải là boolean",
            },
        },
    }),

    handlerValidatorErrors,
];

exports.updateTodoValidator = [
    checkSchema({
        title: {
            optional: true,
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },

        isCompleted: {
            optional: true,
            notEmpty: {
                errorMessage: "trường này không được để trống",
            },
            isBoolean: {
                errorMessage: "trường này phải là boolean",
            },
        },
    }),

    handlerValidatorErrors,
];
