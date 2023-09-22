import { Request, Response } from "express";
import { Tag } from "../entities/tag";

const tagController = {
  read: async (_req: Request, res: Response) => {
    try {
      const result = await Tag.find({ relations: { ads: true } });
      res.send(result);
    } catch (err) {
      console.log("err", err);
      res.send("Error");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      await Tag.save(req.body);
      res.send("Tag has been created");
    } catch (err) {
      console.log("err", err);
      res.send("Error");
    }
  },
};

export default tagController;
