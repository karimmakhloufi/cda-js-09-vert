import { Request, Response } from "express";
import { ads } from "../data";
import { db } from "../index";

const adsController = {
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
          ville=?,
          categorie=?
        WHERE id=?
      `,
      [
        req.body.newAd.title,
        req.body.newAd.description,
        req.body.newAd.price,
        req.body.newAd.createdAt,
        req.body.newAd.picture,
        req.body.newAd.location,
        req.body.newAd.categorie,
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
