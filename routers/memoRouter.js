const express = require("express");

const router = express.Router();

router.get("/create", (req, res, next) => {
    res.render("screens/create")
});

router.post("/create", async (req, res, next) => {
    const { content } = req.body;

    console.log(content);

    res.redirect("/");
});

router.post("/delete", async (req, res, next) => {
    const { id } = req.body;

    console.log(id);

    res.redirect("/")
})

module.exports = router;