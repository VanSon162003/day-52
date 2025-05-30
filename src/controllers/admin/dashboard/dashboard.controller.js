const postsService = require("@/service/posts.service");
const { success } = require("@/utils/response");

exports.index = async (req, res) => {
    // console.log(req.session.get("hehe"));

    res.render("admin/dashboard");
};
