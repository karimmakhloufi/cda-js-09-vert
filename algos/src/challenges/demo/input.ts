import { User } from "./answer";

export default {
  users: [
    { name: "Alice", email: "alice@somedomain.fr" },
    { name: "Tom", email: "tom@somedomain.fr" },
    { name: "Bob", email: "bob@somedomain.fr" },
    { name: "Ninja", email: "ninja@somedomain.fr" },
  ],
} as { users: User[] };
