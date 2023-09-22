import { Request, Response } from "express";
import { Category } from "../entities/category";

const categoryController = {
  read: async (_req: Request, res: Response) => {
    try {
      const result = await Category.find();
      res.send(result);
    } catch (err) {
      console.log("err", err);
      res.send("Error");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      await Category.save(req.body);
      res.send("Category has been created");
    } catch (err) {
      console.log("err", err);
      res.send("Error");
    }
  },
};

export default categoryController;
