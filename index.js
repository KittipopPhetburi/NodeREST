require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World! 12315665465");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});