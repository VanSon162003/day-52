require("module-alias/register");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./src/routes");
const notFoundHandle = require("./src/middleWare/errors/notFoundHandle");
const errorHandler = require("./src/middleWare/errors/erorrHandle");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/api/v1", router);

// xử lý tài nguyên không chính xác

app.use(notFoundHandle);

// hàm xử lý lỗi

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
