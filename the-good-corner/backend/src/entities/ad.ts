import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
