import express from "express";

const route = express.Router();

route.get("/:id", (req, res) => {
    console.log("hhh");
    res.send("ok")
});

export default route;
