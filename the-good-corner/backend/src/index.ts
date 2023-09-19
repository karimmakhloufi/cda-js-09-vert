import express from "express";

const app = express();
const port: number = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from typescript app with live reload");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
