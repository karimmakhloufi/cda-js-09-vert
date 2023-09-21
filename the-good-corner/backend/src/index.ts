import express, { Express } from "express";
import sqlite3 from "sqlite3";

import adsController from "./controllers/adsController";
import categoryController from "./controllers/categoryController";

const app: Express = express();
const port: number = 3000;

export const db = new sqlite3.Database("good_corner.sqlite");

db.run(`PRAGMA foreign_keys = ON;`);

db.run(`
  CREATE TABLE IF NOT EXISTS AD (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    title text,
    description text,
    owner text,
    price real,
    createdAt text,
    location text,
    picture text,
    category_id INTEGER NOT NULL,
    FOREIGN KEY(category_id) REFERENCES CATEGORY(ID)
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS CATEGORY (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name text
  );
`);

app.use(express.json());

app.get("/ad", adsController.read);
app.post("/ad", adsController.create);
app.delete("/ad", adsController.delete);
app.put("/ad", adsController.put);

app.get("/category", categoryController.read);
app.post("/category", categoryController.create);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
