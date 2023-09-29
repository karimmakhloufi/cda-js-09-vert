import { Request, Response } from "express";
import { Like } from "typeorm";
import { Ad } from "../entities/ad";
import { validate } from "class-validator";

const adsController = {
  read: async (req: Request, res: Response) => {
    let result: Ad[] = [];

    try {
      if (req.query.title !== undefined) {
        result = await Ad.find({
          where: { title: Like(`%${req.query.title}%`) },
          relations: {
            category: true,
            tags: true,
          },
        });
      } else if (req.query.category !== undefined) {
        result = await Ad.find({
          where: { category: { name: Like(`%${req.query.category}%`) } },
          relations: {
            category: true,
            tags: true,
          },
        });
      } else {
        console.log("no title in query");
        result = await Ad.find({
          relations: {
            category: true,
            tags: true,
          },
        });
      }
      res.send(result);
    } catch (err) {
      res.send("There has been an error while reading the ads");
    }
  },
  readOne: async (req: Request, res: Response) => {
    try {
      const result = await Ad.find({
        where: {
          id: Number.parseInt(req.params.id),
        },
        relations: { category: true },
      });
      if (result.length !== 1) {
        throw new Error(`query error`);
      }
      res.send(result[0]);
    } catch (err) {
      console.log("error", err);
      res.send("an error occured while reading one ad");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const newAd = Ad.create(req.body);
      const errors = await validate(newAd);
      if (errors.length > 0) {
        throw new Error(`Validation failed!`);
      } else {
        await newAd.save();
      }
      res.send("Ad has been created");
    } catch (err) {
      res.status(400).send("An error occured while creating the ad");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const adToDelete = await Ad.findOneByOrFail({
        id: Number.parseInt(req.params.id),
      });
      adToDelete.remove();
      res.send("The ad has been deleted");
    } catch (err) {
      console.log("error", err);
      res.send("An error occured while deleting the ad");
    }
  },
  put: async (req: Request, res: Response) => {
    try {
      const result = await Ad.find({
        where: {
          id: Number.parseInt(req.body.idToEdit),
        },
        relations: { category: true },
      });
      console.log("result", result);
      Ad.update({ id: req.body.idToEdit }, req.body.newAd);
      res.send("The ad has been updated");
    } catch (err) {
      console.log(err);
      res.send("there has been an error while updating the ad");
    }
  },
};

export default adsController;
