const { createToken, verifyToken } = require("@/utils/jwt");
const transporter = require("@/configs/mailer");
const queue = require("@/utils/queue");

const usersService = require("@/service/users.service");
const md5 = require("md5");

// Luồng đăng ký và xác thựcMore actions

// 1. Đăng ký tài khoản, thêm trường verified_at (mặc định null). *Đăng ký thành công: "Vui lòng kiểm tra email và xác thực tài khoản trước."
// 2. Tạo token ứng với tài khoản đó (VD: gắn userId), có thời hạn (VD: 12 giờ)
// 3. Gửi email kèm link xác thực (method GET) kèm param token
// 4. Xác thực nếu token hợp lệ -> điền verified_at = thời gian hiện tại

// Logic: Khi user đăng nhập, check verified_at nếu null không cho đăng nhập
// => Báo flash message: "Vui lòng xác thực tài khoản trước."

exports.showLoginForm = (req, res) => {
    res.render("admin/login", {
        layout: "admin/layouts/auth",
    });
};

exports.login = async (req, res) => {
    const password = md5(req.body.password);
    const email = req.body.email;

    const user = await usersService.getByEmailAndPassword(email, password);

    if (user) {
        req.session.userId = user.id;
        res.setFlash("success", "Đăng nhập thành công thành công!");

        res.redirect("/admin/");
    }
};

exports.showRegisterForm = (req, res) => {
    res.render("admin/register", {
        layout: "admin/layouts/auth",
    });
};

exports.register = async (req, res) => {
    const user = await usersService.create({
        email: req.body.email,
        password: md5(req.body.password),
    });

    if (user) {
        // Tạo link xác minh email (để gửi kèm email xác minh)

        // const verifyUrl = `${req.protocol}://${req.host}/admin/verify-email?token=${token}`;

        // res.locals.verifyUrl = verifyUrl;

        queue.dispatch("sendVerifyEmailJob", { userId: user.id }, 5);
        // await transporter.sendMail({
        //     from: "mailer@fullstack.edu.vn",
        //     to: user.email, // Gửi cho đúng tài khoản vừa đăng ký
        //     html: `
        //     <div>
        //         <p>
        //             Nhấn vào đây để xác thực:
        //         </p>
        //         <p>
        //             <a href="${verifyUrl}">Xác minh tài khoản</a>
        //         </p>
        //     </div>
        // `,
        // });

        res.setFlash(
            "success",
            `Chúng tôi đã gửi một email xác thực đến ${user.email}. Hãy xác thực để tiếp tục`
        );

        res.redirect("/admin/login");
    }
};

exports.verifyEmail = async (req, res) => {
    // Nhận token từ query parameter
    const token = req.query.token;
    console.log(token);

    // Xác thực token hợp lệ

    const verify = verifyToken(token);

    console.log(verify);

    // Xác thực thành công
    if (verify.success) {
        const userID = verify.data.userId;

        const user = await usersService.getById(userID);

        // nếu đã xác minh rồi mà người dùng vẫn muốn xác minh thì bắn ra lỗi
        if (user?.verified_at) {
            res.setFlash(
                "info",
                "Liên kết xác minh đã hết hạn hoặc không hợp lệ."
            );

            return res.redirect("/admin/login");
        }

        await usersService.update(userID, {
            verified_at: new Date(),
        });

        res.send(`<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xác thực Email thành công - Tối giản</title>
</head>
<body style="margin: 0; 
            padding: 40px 20px; 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background-color: #ffffff; 
            color: #333333;">
    
    <div style="max-width: 400px; margin: 0 auto; text-align: center;">
        
        <!-- Success Icon -->
        <div style="margin-bottom: 30px;">
            <div style="width: 70px; 
                        height: 70px; 
                        background-color: #22c55e; 
                        border-radius: 50%; 
                        margin: 0 auto; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center;">
                <span style="color: #ffffff; font-size: 36px;">✓</span>
            </div>
        </div>
        
        <h1 style="font-size: 24px; 
                   font-weight: 600; 
                   margin: 0 0 15px 0; 
                   color: #166534;">
            Xác thực thành công!
        </h1>
        
        <p style="font-size: 16px; 
                  line-height: 1.5; 
                  margin: 0 0 30px 0; 
                  color: #4b5563;">
            Email của bạn đã được xác thực. Tài khoản của bạn đã sẵn sàng sử dụng.
        </p>
        
        <!-- Login Button -->
        <a href="/admin/login" 
           style="display: inline-block; 
                  background-color: #22c55e; 
                  color: #ffffff; 
                  text-decoration: none; 
                  padding: 14px 28px; 
                  border-radius: 6px; 
                  font-size: 16px; 
                  font-weight: 500; 
                  margin-bottom: 30px;">
            Đăng nhập
        </a>
        <a href="/admin/reset-password/${userID}" 
           style="display: inline-block; 
                  background-color: #22c55e; 
                  color: #ffffff; 
                  text-decoration: none; 
                  padding: 14px 28px; 
                  border-radius: 6px; 
                  font-size: 16px; 
                  font-weight: 500; 
                  margin-bottom: 30px;">
            Reset password
        </a>
        
        <div style="border-top: 1px solid #e5e7eb; 
                    padding-top: 20px; 
                    margin-top: 30px;">
            <p style="font-size: 14px; 
                      color: #9ca3af; 
                      margin: 0;">
                Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
            </p>
        </div>
        
    </div>
</body>
</html>
`);
    }
    res.send("verify fail");
};

exports.logout = async (req, res) => {
    delete req.session.userId;
    res.redirect("/admin/login");
};

exports.showResetForm = (req, res) => {
    const id = req.params.id;
    res.render("admin/resetPassword", {
        id,
        layout: "admin/layouts/auth",
    });
};

exports.resetPassword = async (req, res) => {
    const { newPassword, id, ...data } = req.body;
    try {
        const user = await usersService.getById(+id);
        await usersService.update(user.id, {
            password: md5(newPassword),
        });
        res.setFlash("success", `Reset mật khẩu thành công`);

        res.redirect("/admin/login");
    } catch (error) {
        res.setFlash("error", `Reset mật khẩu không thành công`);

        res.redirect("/admin/resetPassword");
    }
};

exports.showForgotForm = (req, res) => {
    res.render("admin/forgotPassword", {
        layout: "admin/layouts/auth",
    });
};

exports.forgotPassword = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await usersService.getByEmail(email);
        await usersService.update(user.id, {
            verified_at: null,
        });

        queue.dispatch("sendVerifyEmailJob", { userId: user?.id }, 5);
        res.setFlash(
            "success",
            `Chúng tôi đã gửi một email xác thực đến ${user.email}. Hãy xác thực để tiếp tục`
        );
    } catch (error) {
        res.setFlash("error", `Email không hợp lệ vui lòng nhập email khác`);
    }

    res.redirect("/admin/forgot-password");
};

exports.changPassword = async (req, res) => {
    const id = res.locals.auth.id;
    const { password, newPassword } = req.body;
    try {
        const user = await usersService.getByIdAndPassword(id, md5(password));

        if (user) {
            await usersService.update(user.id, {
                password: md5(newPassword),
            });
            res.setFlash("success", `Đổi mật khẩu thành công`);
        }
    } catch (error) {
        res.setFlash("error", `Đổi mật khẩu không thành công`);
    }
    res.redirect("/admin/account-settings");
};
