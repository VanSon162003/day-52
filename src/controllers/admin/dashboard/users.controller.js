exports.index = async (req, res) => {
    res.render("admin/users");
};

exports.show = async (req, res) => {
    res.render("admin/users/show");
};

exports.edit = async (req, res) => {
    res.render("admin/users/edit");
};

exports.create = async (req, res) => {
    res.render("admin/users/create");
};
