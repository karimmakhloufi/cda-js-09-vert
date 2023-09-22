import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";

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
}
