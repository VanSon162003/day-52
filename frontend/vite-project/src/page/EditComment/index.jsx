import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function EditComment() {
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (!data.name && !data.comment)
            return alert("hãy nhập 1 trong 2 trường để đi tiếp");

        try {
            const res = await fetch(
                `http://127.0.0.1:3000/api/v1/comments/${params.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await res.json();
            if (result.success) {
                toast.success("Sửa thành công!", { autoClose: 2000 });
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="app">
            <ToastContainer />
            <h1>Thêm comment</h1>

            <form className="form" action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder="Nhập tên" />
                <input
                    type="text"
                    name="comment"
                    id=""
                    placeholder="Nhập comment..."
                />

                <button>Sửa</button>
            </form>
        </div>
    );
}

export default EditComment;
