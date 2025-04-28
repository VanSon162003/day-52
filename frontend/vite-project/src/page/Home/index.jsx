import React, { useEffect, useState } from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.data));
    }, [setPosts]);

    const handleDelete = async (e) => {
        const check = confirm("bạn có muốn xoá không");

        const id = e.target.closest("li").dataset.id;

        if (check) {
            try {
                const res = await fetch(`http://127.0.0.1:3000/posts/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

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
                        <Link to={`/edit-post/${post.id}`}>sưa</Link>
                        <Link onClick={handleDelete}>xoá</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
