import { Like } from "typeorm";
import { Ad } from "../entities/ad";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { AdInput } from "../inputs/Ad";
import { AdUpdateInput } from "../inputs/AdUpdate";

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
      return await Ad.find({ relations: { category: true, tags: true } });
    }
  }

  @Authorized()
  @Mutation(() => Ad)
  async createNewAd(@Arg("adData") adData: AdInput) {
    if (adData.tags) {
      return await Ad.save({
        ...adData,
        category: { id: adData.category },
        tags: adData.tags.map((el) => ({ id: el })),
      });
    } else {
      // TODO make tags optionnal in creation
      return await Ad.save({
        ...adData,
        category: { id: adData.category },
        tags: [],
      });
    }
  }

  @Mutation(() => Ad)
  async updateAd(@Arg("id") id: number, @Arg("adData") adData: AdUpdateInput) {
    // TODO Remove any
    const newAdData: any = { ...adData };
    if (adData.category) {
      newAdData.category = { id: adData.category };
    }

    if (adData.tags) {
      newAdData.tags = adData.tags.map((el) => ({ id: el }));
    }

    return await Ad.save({ id, ...newAdData });
  }
}
