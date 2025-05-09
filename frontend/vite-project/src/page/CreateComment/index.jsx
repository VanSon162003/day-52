import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function CreateComment() {
    const params = useParams();

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

                <button>Thêm</button>
            </form>
            <hr />
        </div>
    );
}

export default CreateComment;
