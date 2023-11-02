import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";
import { Category } from "./category";
import { Tag } from "./tag";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @Length(3)
  title: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  owner: string;

  @Field()
  @Column()
  imageUrl: string;

  @Field()
  @Column()
  location: string;

  // an ad has only 1 category
  // a category can contain multiple ads
  // Many to One relationship (many ads one category)
  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.ads, {
    onDelete: "CASCADE",
  })
  category: Category;

  // an ad can have multiple tags
  // a tag can have multiple ads
  @Field(() => [Tag])
  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.ads)
  tags: Tag[];
}
