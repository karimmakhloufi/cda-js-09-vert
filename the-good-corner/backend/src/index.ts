import express from "express";

import { ads } from "./data";

const app = express();
const port: number = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from typescript app with live reload");
});

app.get("/ad", (req, res) => {
  res.send(ads);
});

app.post("/ad", (req, res) => {
  console.log(req.body);
  ads.push(req.body);
  res.send("The ad has been added");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
