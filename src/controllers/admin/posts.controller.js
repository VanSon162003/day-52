const postsService = require("@/service/posts.service");

exports.index = async (req, res) => {
    const page = req.query.page ?? 1;

    const { items } = await postsService.getAll(page);
    console.log(items);

    res.render("admin/posts/index", { items });
};

exports.show = async (req, res) => {
    const id = +req.params.id;

    const post = await postsService.getOne(id);

    res.render("admin/posts/detail", { post });
};
