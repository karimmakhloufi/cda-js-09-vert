import { Like } from "typeorm";
import { Ad } from "../entities/ad";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class AdResolver {
  @Query(() => [Ad])
  async getAllAds(@Arg("category", { nullable: true }) category?: string) {
    if (category) {
      return await Ad.find({
        where: { category: { name: Like(`%${category}%`) } },
        relations: {
          category: true,
        },
      });
    } else {
      return await Ad.find({ relations: { category: true } });
    }
  }
}
