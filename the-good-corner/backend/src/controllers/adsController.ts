import { Request, Response } from "express";
import { ads } from "../data";

const adsController = {
  delete: (req: Request, res: Response) => {
    ads.splice(req.body.id, 1);
    res.send("The ad has been deleted");
  },
  put: (req: Request, res: Response) => {
    ads[req.body.idToEdit] = req.body.newAd;
    res.send("The ad has been edited");
  },
};

export default adsController;
