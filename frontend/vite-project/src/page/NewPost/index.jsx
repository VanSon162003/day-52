import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function NewPost() {
    const inputValue = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const value = inputValue.current.value.trim();

        if (!value) {
            return alert("hãy nhập vào gì đó để thêm mới bài viết");
        }

        const res = await fetch("http://127.0.0.1:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: value }),
        });

        const data = await res.json();
        if (data.status === "success") {
            toast.success("Thêm bài viết thành công!", {
                autoClose: 2000,
            });

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
            toast.success("Thêm bài viết không thành công!", {
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="app">
            <ToastContainer />

            <h1>Thêm bài viết</h1>
            <div className="add-post">
                <input
                    ref={inputValue}
                    type="text"
                    placeholder="Nhập tên bài viết"
                    id="post-input"
                />
                <Link onClick={handleSubmit} to={"/new-post"} id="add-post-btn">
                    Thêm
                </Link>
            </div>
        </div>
    );
}

export default NewPost;
