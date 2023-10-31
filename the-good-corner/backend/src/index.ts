import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "../config/db";
import { CategoryResolver } from "./resolvers/Category";
import { AdResolver } from "./resolvers/Ad";

const start = async () => {
  await dataSource.initialize();
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
