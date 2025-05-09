import { commonjs } from "globals";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function EditComment() {
    const params = useParams();

    const [commentId, setCommentId] = useState({});
    const [dataInput, setDataInput] = useState(commentId);
    console.log(dataInput);

    const handleChangValue = () => {
        setDataInput((prev) => ({
            ...prev,
            name: commentId.name,
            comment: commentId.comment,
        }));
    };

    return (
        <div className="app">
            <ToastContainer />
            <h1>Thêm comment</h1>

            <form className="form" action="" onSubmit={handleSubmit}>
                <input
                    value={commentId.name}
                    type="text"
                    name="name"
                    id=""
                    placeholder="Nhập tên"
                    onChange={handleChangValue}
                />
                <input
                    value={commentId.comment}
                    type="text"
                    name="comment"
                    id=""
                    onChange={handleChangValue}
                    placeholder="Nhập comment..."
                />

                <button>Sửa</button>
            </form>
        </div>
    );
}

export default EditComment;
