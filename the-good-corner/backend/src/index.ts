import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "../config/db";
import { CategoryResolver } from "./resolvers/Category";
import { AdResolver } from "./resolvers/Ad";
import { Category } from "./entities/category";

const start = async () => {
  await dataSource.initialize();

  // If no category was created, create one so the ad form works
  const categories = await Category.find();
  if (categories.length === 0) {
    await Category.save({ name: "miscellaneous" });
  }
  const schema = await buildSchema({
    resolvers: [CategoryResolver, AdResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();
