const throwError = require("@/utils/throwError");
const { readDb, writeDb } = require("../utils/db.util");
const postsModel = require("@/models/posts.model");
const RESOURCE = "posts";

const getAllPost = async () => {
    const posts = await readDb(RESOURCE);
    return posts;
};

const getAll = async (page = 1) => {
    const count = await postsModel.count();

    const posts = await postsModel.findAll(page);

    const lastPage = Math.ceil(count / 10);

    const result = {
        items: posts,

        pagination: {
            current_page: page,
            per_page: 10,
            total: count,
            last_page: lastPage,
        },
    };

    return result;
};

const getPostById = async (id) => {
    const posts = await readDb(RESOURCE);
    const post = posts.find((item) => item.id === +id);
    return post;
};

const createPost = async (data) => {
    const posts = await readDb(RESOURCE);

    const newPost = {
        id: (posts[posts.length - 1]?.id ?? 0) + 1,
        name: data.name,
    };

    const updatedPosts = [...posts, newPost];
    await writeDb(RESOURCE, updatedPosts);

    return newPost;
};

const updatePost = async (id, data) => {
    const posts = await readDb(RESOURCE);
    const post = await getPostById(id);

    let updatedPost = undefined;
    if (post) {
        updatedPost = {
            ...post,
            name: data.name ?? post.name,
        };

        const updatedPosts = posts.map((item) =>
            item.id === +id ? updatedPost : item
        );

        await writeDb(RESOURCE, updatedPosts);
    }

    return updatedPost;
};

const deletePost = async (id) => {
    const posts = await readDb(RESOURCE);
    const exists = await getPostById(id);

    if (exists) {
        const updatedPosts = posts.filter((item) => item.id !== +id);
        await writeDb(RESOURCE, updatedPosts);
    }

    return exists;
};

module.exports = {
    getAllPost,
    getAll,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
