import React, { useEffect, useState } from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Home() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [showComments, setshowComments] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/v1/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.data));
    }, [setPosts]);

    const handleDelete = async (e) => {
        const check = confirm("bạn có muốn xoá không");

        const id = e.target.closest("li").dataset.id;

        if (check) {
            try {
                const res = await fetch(
                    `http://127.0.0.1:3000/api/v1/posts/${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                let data = {};
                const text = await res.text();
                if (text) {
                    data = JSON.parse(text);
                }

                if (data.status === "error") {
                    toast.error("Xoá không thành công!", { autoClose: 2000 });
                } else {
                    toast.success("Xoá thành công!", { autoClose: 2000 });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 2000);
                }
            } catch (error) {
                toast.error("Có lỗi xảy ra!", { autoClose: 2000 });
            }
        }
    };

    return (
        <div className="app">
            <ToastContainer />

            <h1>Quản lý bài viết</h1>
            <div className="add-post">
                <Link to={"/new-post"} id="add-post-btn">
                    Thêm bài viết
                </Link>
            </div>

            <ul id="post-list" className="post-list">
                {posts.map((post, i) => (
                    <li data-id={post.id} key={i}>
                        <span>{post.name}</span>
                        <Link
                            onClick={async (e) => {
                                e.preventDefault();
                                setshowComments(true);

                                try {
                                    const res = await fetch(
                                        `http://127.0.0.1:3000/api/v1/posts/${post.id}/comments`,
                                        {
                                            method: "GET",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                        }
                                    );

                                    const data = await res.json();
                                    setComments(data.data);
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        >
                            hiển thị comments
                        </Link>

                        <Link to={`/create-comment/${post.id}`}>
                            Thêm bình luận
                        </Link>

                        <Link to={`/edit-post/${post.id}`}>sưa</Link>
                        <Link onClick={handleDelete}>xoá</Link>
                    </li>
                ))}
            </ul>

            <ul>
                {showComments &&
                    (comments.length === 0 ? (
                        <li>không có bình luận nào</li>
                    ) : (
                        comments.map((comment) => (
                            <li className="comments" key={comment.id}>
                                <span>tên: {comment.name}</span> |{" "}
                                <span>comment: {comment.comment}</span>
                                <Link to={`/edit-comment/${comment.id}`}>
                                    sửa comment
                                </Link>
                            </li>
                        ))
                    ))}
            </ul>
        </div>
    );
}

export default Home;
