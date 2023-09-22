import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  owner: string;

  @Column()
  picture: string;

  @Column()
  location: string;

  // an ad has only 1 category
  // a category can contain multiple ads
  // Many to One relationship (many ads one category)
  @ManyToOne(() => Category, (category) => category.ads)
  category: Category;

  // an ad can have multiple tags
  // a tag can have multiple ads
  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.ads)
  tags: Tag[];
}
