import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { User } from "../entities/user";

@InputType({ description: "New recipe data" })
class UserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getAllUsers() {
    const result = await User.find();
    return result;
  }

  @Mutation(() => String)
  async register(@Arg("newUserData") newUserData: UserInput) {
    try {
      const newUser = new User();
      newUser.email = newUserData.email;
      newUser.hashedPassword = await argon2.hash(newUserData.password);
      await newUser.save();
      return "ok";
    } catch (err) {
      console.log("err", err);
      return "error while creating new user";
    }
  }

  @Query(() => String)
  async login(@Arg("UserData") UserData: UserInput) {
    try {
      const user = await User.findOneByOrFail({ email: UserData.email });
      if (
        (await argon2.verify(user.hashedPassword, UserData.password)) === false
      ) {
        throw new Error("invalid password");
      } else {
        const token = jwt.sign({ email: user.email }, "mysupersecretkey");
        return token;
      }
    } catch (err) {
      console.log("err", err);
      return "invalid credentials";
    }
  }
}
