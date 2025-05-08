const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("./handlerValidatorErrors");

exports.createCommentValidator = [
    checkSchema({
        comment: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
        name: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
    }),

    handlerValidatorErrors,
];

exports.updateCommentValidator = [
    checkSchema({
        comment: {
            optional: true,
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
        name: {
            optional: true,
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
    }),

    handlerValidatorErrors,
];
