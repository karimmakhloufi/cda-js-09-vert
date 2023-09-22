import "reflect-metadata";
import express, { Express } from "express";
import dataSource from "../config/db";
import adsController from "./controllers/adsController";
import categoryController from "./controllers/categoryController";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.get("/ad", adsController.read);
app.post("/ad", adsController.create);
app.delete("/ad", adsController.delete);
app.put("/ad", adsController.put);

app.get("/category", categoryController.read);
app.post("/category", categoryController.create);

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});
