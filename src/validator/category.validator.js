const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("./handlerValidatorErrors");

exports.createCategoryValidator = [
    checkSchema({
        name: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },

        desc: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
    }),

    handlerValidatorErrors,
];

exports.updateCategoryValidator = [
    checkSchema({
        name: {
            optional: true,
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },

        desc: {
            optional: true,
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },
    }),

    handlerValidatorErrors,
];
