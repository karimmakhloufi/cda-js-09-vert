import { Request, Response } from "express";
import { ads } from "../data";

const adsController = {
  delete: (req: Request, res: Response) => {
    ads.splice(req.body.id, 1);
    res.send("The ad has been deleted");
  },
};

export default adsController;
