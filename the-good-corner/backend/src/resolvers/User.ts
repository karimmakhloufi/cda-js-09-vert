import {
  Arg,
  Authorized,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Ctx,
} from "type-graphql";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { User, UserRoleType } from "../entities/user";

@ObjectType()
class UserInfo {
  @Field()
  isLoggedIn: boolean;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  role: string;
}

@InputType({ description: "New recipe data" })
class UserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Authorized("admin")
  @Query(() => [User])
  async getAllUsers() {
    const result = await User.find();
    return result;
  }

  @Authorized("admin")
  @Mutation(() => String)
  async deleteUser(@Arg("userId") userId: string) {
    const userToDelete = await User.findOneByOrFail({
      id: Number.parseInt(userId),
    });
    await userToDelete.remove();
    return "user removed";
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
    let payload: { email: string; role: UserRoleType };
    const user = await User.findOneByOrFail({ email: UserData.email });
    if (
      (await argon2.verify(user.hashedPassword, UserData.password)) === false
    ) {
      throw new Error("invalid password");
    } else {
      payload = { email: user.email, role: user.role };
      const token = jwt.sign(payload, "mysupersecretkey");
      return token;
    }
  }

  @Authorized("admin")
  @Query(() => String)
  async adminQuery() {
    return "you are admin";
  }

  @Query(() => UserInfo)
  async whoAmI(@Ctx() ctx: { email: string; role: string }) {
    if (ctx.email !== undefined) {
      return { ...ctx, isLoggedIn: true };
    } else {
      return { isLoggedIn: false };
    }
  }
}
