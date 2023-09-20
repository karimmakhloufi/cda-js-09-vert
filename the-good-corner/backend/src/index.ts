import express, { Express } from "express";
import sqlite3 from "sqlite3";

import { ads } from "./data";
import adsController from "./controllers/adsController";

const app: Express = express();
const port: number = 3000;

const db = new sqlite3.Database("good_corner.sqlite");

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
  // ads.push(req.body);
  //INSERT INTO ad (title, description, owner, price, ville) VALUES ('Boat to sell', 'My Boat is red, working fine.','Boat.seller@gmail.com', 140000, 'Bordeaux')
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
      console.log("error ?", err);
      res.send("The ad has been added");
    }
  );
});

app.delete("/ad", adsController.delete);

app.put("/ad", adsController.put);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
