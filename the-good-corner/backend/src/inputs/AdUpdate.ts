import { Field, InputType } from "type-graphql";

@InputType()
export class AdUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  owner?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  category?: number;

  @Field(() => [Number], { nullable: true })
  tags?: [number];
}
