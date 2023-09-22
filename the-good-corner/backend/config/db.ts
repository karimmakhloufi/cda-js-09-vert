import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./good_corner.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: ["query", "error"],
});

export default dataSource;
