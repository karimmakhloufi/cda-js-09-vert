import { Category } from "../entities/category";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async allCategories() {
    const result = await Category.find();
    return result;
  }

  @Mutation(() => String)
  async deleteCategoryById(@Arg("id") id: number) {
    const categoryToDelete = await Category.findOneByOrFail({
      id: id,
    });
    categoryToDelete.remove();
    return "The Category has been deleted";
  }
}
