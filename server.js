require("module-alias/register");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const morgan = require("morgan");
const cors = require("cors");
const router = require("./src/routes/api");
const adminRouter = require("./src/routes/admin");
const notFoundHandle = require("./src/middleWare/errors/notFoundHandle");
const errorHandler = require("./src/middleWare/errors/erorrHandle");
const handleSidebar = require("@/middleWare/admin/handleSidebar");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.set("layout", "admin/layouts/default");
// app.set("layout", "admin/layouts/auth");

const methodOverride = require("method-override");
// Hỗ trợ từ query hoặc input hidden

app.use(methodOverride("_method"));

// cấu hình router public
app.use(express.static("public"));

// router tổng

app.use("/admin", handleSidebar, adminRouter);
app.use("/api/v1", router);

// xử lý tài nguyên không chính xác

app.use(notFoundHandle);

// hàm xử lý lỗi

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
