import express, { json } from "express";
import cors from "cors";
import login from "./login.js";
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {});

const listerner = [];

app.post("/add", (req, res) => {
  listerner.push(req.body);
  res.json(res.body);
});

app.get("/service", (req, res) => {
  res.send(listerner);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(listerner[id - 1]);
});
