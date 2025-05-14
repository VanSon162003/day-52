const throwError = require("./throwError");

const models = {
    user: require("@/models/users.model"),
    course: require("@/models/courses.model"),
    learning: require("@/models/learningPath.model"),
};

//[user]

function attachResourceLoaders(router, params) {
    params.forEach((param) => {
        router.param(param, async (req, res, next, id) => {
            const resource = await models[param].findById(id);

            if (!resource)
                throwError(
                    404,
                    `${param[0].toUpperCase() + param.slice(1)} not found`
                );

            req[param] = resource;

            next();
        });
    });
}

module.exports = attachResourceLoaders;
