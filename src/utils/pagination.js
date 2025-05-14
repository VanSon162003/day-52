function pagination(items, count, page, lastPage) {
    return {
        items,

        pagination: {
            current_page: page,
            per_page: 10,
            total: count,
            last_page: lastPage,
        },
    };
}

module.exports = pagination;
