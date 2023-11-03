import { Field, InputType } from "type-graphql";

@InputType()
export class AdInput {
  @Field()
  title: string;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  owner: string;

  @Field()
  imageUrl: string;

  @Field()
  location: string;

  @Field()
  category: number;

  @Field(() => [Number], { nullable: true })
  tags?: [number];
}
