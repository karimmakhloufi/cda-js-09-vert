import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
