exports.index = async (req, res) => {
    res.render("admin/comments");
};

exports.show = async (req, res) => {
    res.render("admin/comments/show");
};

exports.edit = async (req, res) => {
    res.render("admin/comments/edit");
};

exports.create = async (req, res) => {
    res.render("admin/comments/create");
};
