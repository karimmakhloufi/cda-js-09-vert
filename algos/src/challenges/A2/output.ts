import { CategoryWithTags } from "./answer";

export default [
  {
    name: "Vếtement",
    ads: [
      {
        title: "Chaussures (41)",
        price: 5,
        tags: ["Bleu", "Rouge"],
      },
    ],
    tags: ["Bleu", "Rouge"],
  },
  {
    name: "Locomotion",
    ads: [
      {
        title: "Vélo de course",
        price: 100,
        tags: ["Bleu", "Rouge", "Course"],
      },
      {
        title: "Vélo de ville",
        price: 50,
        tags: ["Vert", "Rouge", "Ville"],
      },
      {
        title: "Scooter électrique",
        price: 1000,
        tags: ["Blanc", "Scooter"],
      },
    ],
    tags: ["Blanc", "Bleu", "Course", "Rouge", "Scooter", "Vert", "Ville"],
  },
  {
    name: "Maison",
    ads: [
      {
        title: "Robot mélangeur",
        price: 10,
        tags: ["Cuisine", "Robot"],
      },
      {
        title: "Tapis",
        price: 150,
        tags: ["Blanc", "Décoration"],
      },
      {
        title: "Armoire",
        price: 400,
        tags: ["Décoration", "Meubles"],
      },
      {
        title: "Pots de peinture (don)",
        price: 0,
        tags: [],
      },
      {
        title: "Boîtes à thé",
        price: 5,
        tags: ["Rangements"],
      },
    ],
    tags: ["Blanc", "Cuisine", "Décoration", "Meubles", "Rangements", "Robot"],
  },
] as CategoryWithTags[];
