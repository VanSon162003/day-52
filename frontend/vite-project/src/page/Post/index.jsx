import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Post() {
    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [editForm, setEditForm] = useState(false);
    const [id, setId] = useState(null);

    const [commentId, setCommentId] = useState({
        name: "",
        comment: "",
    });

    useEffect(() => {
        if (!id) return;

        (async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:3000/api/v1/comments/${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await res.json();

                setCommentId(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:3000/api/v1/posts/${params.id}/comments`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await res.json();
                setComments(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [params.id]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:3000/api/v1/posts/${params.id}`
                );
                const data = await res.json();
                setPost(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [params.id]);

    const handleChangValue = (e) => {
        const nameValue = e.target.closest(".name")?.value;
        const commentValue = e.target.closest(".comment")?.value;

        setCommentId((prev) => ({
            ...prev,
            name: nameValue,
            comment: commentValue,
        }));
    };

    const handleDelete = async (comment) => {
        try {
            const res = await fetch(
                `http://127.0.0.1:3000/api/v1/comments/${comment.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Xoá thành công!", {
                autoClose: 2000,
            });

            setComments(() => {
                return comments.filter((c) => {
                    return c.id !== comment.id;
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    const editSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                `http://127.0.0.1:3000/api/v1/comments/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(commentId),
                }
            );

            const result = await res.json();

            if (result.success) {
                toast.success("Sửa thành công!", { autoClose: 2000 });
                setEditForm(!editForm);

                setComments(() => {
                    return comments.map((comment) =>
                        comment.id === result.data.id ? result.data : comment
                    );
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (!data.name || !data.comment)
            return alert("hãy nhập đầy đủ các trường để đi tiếp");

        try {
            const res = await fetch(
                `http://127.0.0.1:3000/api/v1/posts/${params.id}/comments`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await res.json();
            setComments((prev) => [...prev, result.data]);

            if (result.success) {
                toast.success("Thêm thành công!", { autoClose: 2000 });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <h1>{post.name}</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni delectus repellat cum itaque eius fugit ipsa! Qui,
                    repellendus voluptatum odit mollitia illo delectus alias
                    optio nemo explicabo ea? Aperiam, beatae!
                </p>
            </div>

            <div className="comments">
                <span style={{ fontWeight: "700" }}>
                    Comments ({comments.length})
                </span>

                <form className="form" action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Nhập tên"
                    />
                    <input
                        type="text"
                        name="comment"
                        id=""
                        placeholder="Nhập comment..."
                    />

                    <button>Bình luận</button>
                </form>

                <hr style={{ width: "100vw" }} />

                <div className="commentForm">
                    {comments.length > 0 &&
                        comments.map((comment) => {
                            return (
                                <div className="commentGroup" key={comment.id}>
                                    <div className="user">
                                        <img
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                            }}
                                            src="https://a1.vnecdn.net/s61769534880479660226.png?w=60&h=60&s=KWc6wvqJHKSXlMtxC2HqkQ"
                                            alt=""
                                        />
                                        <span className="userName">
                                            {comment.name}
                                        </span>

                                        <div className="content">
                                            <p> {comment.comment}</p>
                                        </div>
                                    </div>

                                    <div className="action">
                                        <button
                                            data-id={`${comment.id}`}
                                            onClick={(e) => {
                                                const id = +e.target.dataset.id;

                                                setId(id);

                                                setEditForm(!editForm);
                                            }}
                                        >
                                            sửa
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(comment)
                                            }
                                        >
                                            xoá
                                        </button>
                                    </div>

                                    {editForm && (
                                        <form
                                            className="form"
                                            action=""
                                            onSubmit={editSubmit}
                                        >
                                            <input
                                                value={commentId?.name}
                                                type="text"
                                                name="name"
                                                className="name"
                                                id=""
                                                placeholder="Nhập tên"
                                                onChange={handleChangValue}
                                            />
                                            <input
                                                value={commentId?.comment}
                                                type="text"
                                                className="comment"
                                                name="comment"
                                                id=""
                                                onChange={handleChangValue}
                                                placeholder="Nhập comment..."
                                            />

                                            <button>Sửa</button>
                                        </form>
                                    )}

                                    <hr />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default Post;
