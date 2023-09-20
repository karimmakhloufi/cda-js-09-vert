import { Request, Response } from "express";
import { db } from "../index";

const adsController = {
  read: (req: Request, res: Response) => {
    db.all("SELECT * from AD", (err, rows) => {
      res.send(rows);
    });
  },
  create: (req: Request, res: Response) => {
    db.run(
      `
      INSERT INTO ad (title, description, owner, price, location, createdAt, picture)
      VALUES (
        "${req.body.title}",
        "${req.body.description}",
        "${req.body.owner}",
        "${req.body.price}",
        "${req.body.location}",
        "${req.body.createdAt}",
        "${req.body.picture}"
      );
    `,
      (err: any, rows: any) => {
        res.send("The ad has been added");
      }
    );
  },
  delete: (req: Request, res: Response) => {
    db.run("DELETE FROM ad WHERE ID = ?;", [req.body.id], () => {
      res.send("The ad has been deleted");
    });
  },
  put: (req: Request, res: Response) => {
    db.run(
      `
        UPDATE ad
        SET
          title=?,
          description=?,
          price=?,
          createdAt=?,
          picture=?,
          location=?
        WHERE id=?
      `,
      [
        req.body.newAd.title,
        req.body.newAd.description,
        req.body.newAd.price,
        req.body.newAd.createdAt,
        req.body.newAd.picture,
        req.body.newAd.location,
        req.body.idToEdit,
      ],
      (err) => {
        if (err) {
          console.log(err);
        }
        res.send("The ad has been edited");
      }
    );
  },
};

export default adsController;
