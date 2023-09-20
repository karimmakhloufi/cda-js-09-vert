import express, { Express } from "express";
import sqlite3 from "sqlite3";

import adsController from "./controllers/adsController";

const app: Express = express();
const port: number = 3000;

export const db = new sqlite3.Database("good_corner.sqlite");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from typescript app with live reload");
});

app.get("/ad", (req, res) => {
  db.all("SELECT * from AD", (err, rows) => {
    res.send(rows);
  });
});

app.post("/ad", (req, res) => {
  console.log(req.body);
  db.run(
    `
    INSERT INTO ad (title, description, owner, price, ville)
    VALUES (
      "${req.body.title}",
      "${req.body.description}",
      "${req.body.owner}",
      "${req.body.price}",
      "${req.body.location}"
    );
  `,
    (err: any, rows: any) => {
      res.send("The ad has been added");
    }
  );
});

app.delete("/ad", adsController.delete);

app.put("/ad", adsController.put);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
