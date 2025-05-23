const sideBarItems = [
    {
        title: "Dashboard",
        path: "/",
        icon: "fa-home",
    },

    {
        title: "Categories",
        path: "/categories",
        icon: "fa-tags",
    },

    {
        title: "Products",
        path: "/products",
        icon: "fa-shopping-cart",
    },

    {
        title: "Topics",
        path: "/topics",
        icon: "fa-bookmark",
    },

    {
        title: "Posts",
        path: "/posts",
        icon: "fa-file-alt",
    },

    {
        title: "Comments",
        path: "/comments",
        icon: "fa-comments",
    },

    {
        title: "Users",
        path: "/users",
        icon: "fa-user",
    },

    {
        title: "Analytics",
        path: "/analytics",
        icon: "fa-chart-bar",
    },

    {
        title: "Settings",
        path: "/settings",
        icon: "fa-cog",
    },
];
function handleSidebar(req, res, next) {
    res.locals.sideBarItems = sideBarItems;
    res.locals.path = req.path;

    next();
}

module.exports = handleSidebar;
