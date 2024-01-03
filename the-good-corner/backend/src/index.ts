import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import * as jwt from "jsonwebtoken";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "../config/db";
import { CategoryResolver } from "./resolvers/Category";
import { AdResolver } from "./resolvers/Ad";
import { Category } from "./entities/category";
import { UserResolver } from "./resolvers/User";

const start = async () => {
  await dataSource.initialize();

  // If no category was created, create one so the ad form works
  const categories = await Category.find();
  if (categories.length === 0) {
    await Category.save({ name: "miscellaneous" });
  }
  const schema = await buildSchema({
    resolvers: [CategoryResolver, AdResolver, UserResolver],
    authChecker: ({ context }) => {
      if (context.email) {
        return true;
      } else {
        return false;
      }
    },
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      // console.log("headers", req.headers.authorization);
      const token = req.headers.authorization?.split("Bearer ")[1];
      // console.log(token);
      if (token) {
        const payload = jwt.verify(token, "mysupersecretkey");
        console.log("payload", payload);
        return payload;
      }
      return {};
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();
