import { Request, Response } from "express";
import { db } from "../index";

const categoryController = {
  read: (req: Request, res: Response) => {
    db.all("SELECT * from CATEGORY", (err, rows) => {
      res.send(rows);
    });
  },
  create: (req: Request, res: Response) => {
    db.run(
      `
      INSERT INTO category (name)
      VALUES (
        "${req.body.name}"
      );
    `,
      (err: any, rows: any) => {
        if (err) {
          console.log("error", err);
          res.send("Error while adding the category");
        } else {
          res.send("The category has been added");
        }
      }
    );
  },
};

export default categoryController;
