import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "postgres",
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: ["query", "error"],
});

export default dataSource;
