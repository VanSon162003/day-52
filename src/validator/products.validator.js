const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("./handlerValidatorErrors");

exports.createProductsValidator = [
    checkSchema({
        name: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },

        desc: {
            notEmpty: true,
            errorMessage: "trường này không được để trống",
        },

        price: {
            notEmpty: {
                errorMessage: "trường này không được để trống",
            },
            isNumeric: {
                errorMessage: "trường này phải là số",
            },
        },
    }),

    handlerValidatorErrors,
];

exports.updateProductsValidator = [
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
        price: {
            optional: true,
            notEmpty: {
                errorMessage: "trường này không được để trống",
            },
            isNumeric: {
                errorMessage: "trường này phải là số",
            },
        },
    }),

    handlerValidatorErrors,
];
