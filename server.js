const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./src/routes");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
