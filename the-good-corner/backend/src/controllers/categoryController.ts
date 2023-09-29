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
  edit: async (req: Request, res: Response) => {
    try {
      await Category.update({ id: req.body.id }, { ...req.body.newCategory });
      res.send("Category has been updated");
    } catch (err) {
      console.log("err", err);
      res.status(400).send("An error has occured while updating the category");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const categoryToDelete = await Category.findOneByOrFail({
        id: req.body.id,
      });
      categoryToDelete.remove();
      res.send("The ad has been deleted");
    } catch (err) {
      console.log("error", err);
      res.send("An error occured while deleting the ad");
    }
  },
};

export default categoryController;
