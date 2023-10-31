import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  buildSchema,
} from "type-graphql";

const booksDB: Book[] = [
  {
    id: "0",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: "1",
    title: "City of Glass",
    author: "Paul Auster",
  },
];

@ObjectType()
class Book {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  author: string;
}

@InputType()
class BookInput {
  @Field()
  title: string;

  @Field()
  author: string;
}

@Resolver()
class BookResolver {
  @Query(() => [Book])
  getAllBooks() {
    return booksDB;
  }

  @Query(() => Book)
  getBookById(@Arg("id") id: string) {
    return booksDB.find((book) => book.id == id);
  }

  @Mutation(() => Book)
  addBook(@Arg("data") { title, author }: BookInput) {
    const lastId = parseInt(booksDB.at(-1)?.id as string, 10);
    const id = (lastId + 1).toString();
    booksDB.push({ title, author, id });
    return booksDB.at(-1);
  }
}

const start = async () => {
  const schema = await buildSchema({
    resolvers: [BookResolver],
  });

  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();
