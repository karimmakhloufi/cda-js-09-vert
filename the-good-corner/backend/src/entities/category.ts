import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./ad";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // a category can contain multiple ads
  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}
