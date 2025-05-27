const { checkSchema } = require("express-validator");
const handlerValidatorErrors = require("./handlerValidatorErrors");

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

        phone: {
            notEmpty: {
                errorMessage: "Nhập số điện thoại của bạn",
            },
            isMobilePhone: {
                options: ["vi-VN"],
                errorMessage: "Số điện thoại không hợp lệ",
            },
        },

        address: {
            notEmpty: {
                errorMessage: "Nhập địa chỉ của bạn",
            },
        },

        username: {
            notEmpty: {
                errorMessage: "Nhập username",
            },
        },

        role: {
            notEmpty: {
                errorMessage: "Chọn quyền hạn của bạn",
            },
        },

        status: {
            notEmpty: {
                errorMessage: "Chọn trạng thái của bạn",
            },
        },

        password: {
            notEmpty: {
                errorMessage: "Nhập mật khẩu của bạn",
            },
        },

        confirm_password: {
            notEmpty: {
                errorMessage: "Trường này không được để trống",
            },

            custom: {
                options: (value, { req }) => value === req.body.password,
                errorMessage: "Mật khẩu nhập lại không khớp",
            },
        },
    }),

    handlerValidatorErrors,
];

exports.userUpdateValidators = [
    (req, res, next) => {
        const id = req.params.id;
        res.view = `admin/users/edit`;
        res.name = `user`;

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

        phone: {
            notEmpty: {
                errorMessage: "Nhập số điện thoại của bạn",
            },
            isMobilePhone: {
                options: ["vi-VN"],
                errorMessage: "Số điện thoại không hợp lệ",
            },
        },

        address: {
            notEmpty: {
                errorMessage: "Nhập địa chỉ của bạn",
            },
        },

        username: {
            notEmpty: {
                errorMessage: "Nhập username",
            },
        },

        role: {
            notEmpty: {
                errorMessage: "Chọn quyền hạn của bạn",
            },
        },

        status: {
            notEmpty: {
                errorMessage: "Chọn trạng thái của bạn",
            },
        },

        password: {
            notEmpty: {
                errorMessage: "Nhập mật khẩu của bạn",
            },
        },

        confirm_password: {
            notEmpty: {
                errorMessage: "Trường này không được để trống",
            },

            custom: {
                options: (value, { req }) => value === req.body.password,
                errorMessage: "Mật khẩu nhập lại không khớp",
            },
        },
    }),

    handlerValidatorErrors,
];
