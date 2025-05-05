const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("./handlerValidatorErrors");

exports.createPostValidator = [
    checkSchema({
        name: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
    }),

    handlerValidatorErrors,
];

exports.updatePostValidator = [
    checkSchema({
        name: {
            optional: true,
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
    }),

    handlerValidatorErrors,
];
