const postsService = require("@/service/posts.service");
const { success } = require("@/utils/response");

exports.index = async (req, res) => {
    res.render("admin/dashboard");
};
