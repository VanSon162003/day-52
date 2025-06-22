const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("../admin/handlerValidatorErrors");

exports.userValidators = [
    (req, res, next) => {
        res.view = "admin/users/create";

        next();
    },

    checkSchema({
        name: {
            notEmpty: true,
            errorMessage: "Nhập tên đầy đủ của bạn",
        },

        email: {
            notEmpty: {
                errorMessage: "Nhập email của bạn",
            },
            isEmail: {
                errorMessage: "Nhập email hợp lệ",
            },
        },
    }),

    handlerValidatorErrors,
];
