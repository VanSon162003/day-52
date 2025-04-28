import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function EditPost() {
    const inputValue = useRef(null);

    const navigate = useNavigate();

    const { id } = useParams();

    const handleSubmit = async () => {
        const value = inputValue.current.value.trim();

        if (!value) {
            return alert("hãy nhập vào gì đó để thêm mới bài viết");
        }

        const res = await fetch(`http://127.0.0.1:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: value }),
        });

        const data = await res.json();
        if (data.status === "success") {
            toast.success("Sửa bài viết thành công!", {
                autoClose: 2000,
            });

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
            toast.success("Sửa bài viết không thành công!", {
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="app">
            <ToastContainer />
            <h1>Sửa bài viết</h1>
            <div className="add-post">
                <input
                    ref={inputValue}
                    type="text"
                    placeholder="Nhập tên bài viết muốn sửa"
                    id="post-input"
                />
                <Link onClick={handleSubmit} id="add-post-btn">
                    Sửa
                </Link>
            </div>
        </div>
    );
}

export default EditPost;
