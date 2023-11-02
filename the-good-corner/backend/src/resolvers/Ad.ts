import { Like } from "typeorm";
import { Ad } from "../entities/ad";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AdInput } from "../inputs/Ad";

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

  @Mutation(() => Ad)
  async createNewAd(@Arg("adData") adData: AdInput) {
    return await Ad.save({ ...adData, category: { id: adData.category } });
  }
}
