import express, { Express } from "express";

import { ads } from "./data";
import adsController from "./controllers/adsController";

const app: Express = express();
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

app.delete("/ad", adsController.delete);

app.put("/ad", adsController.put);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
