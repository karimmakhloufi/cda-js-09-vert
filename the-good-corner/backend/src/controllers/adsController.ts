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
    ads[req.body.idToEdit] = req.body.newAd;
    res.send("The ad has been edited");
  },
};

export default adsController;
