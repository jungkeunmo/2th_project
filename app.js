const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path");

const globalRouter = require("./routers/globalRouter");
const memoRouter = require("./routers/memoRouter");

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/memo", memoRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
})
