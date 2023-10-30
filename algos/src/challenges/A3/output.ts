import { AdWithTagsAndClosestAds } from "./answer";

export default [
  {
    title: "Vélo de course",
    price: 100,
    tags: ["Bleu", "Rouge", "Course"],
    closestAds: [
      {
        title: "Chaussures (41)",
        price: 5,
        tags: ["Bleu", "Rouge"],
      },
    ],
  },
  {
    title: "Robot mélangeur",
    price: 10,
    tags: ["Cuisine", "Robot"],
    closestAds: [],
  },
  {
    title: "Vélo de ville",
    price: 50,
    tags: ["Vert", "Rouge", "Ville"],
    closestAds: [
      {
        title: "Chaussures (41)",
        price: 5,
        tags: ["Bleu", "Rouge"],
      },
      {
        title: "Vélo de course",
        price: 100,
        tags: ["Bleu", "Rouge", "Course"],
      },
    ],
  },
  {
    title: "Tapis",
    price: 150,
    tags: ["Blanc", "Décoration"],
    closestAds: [
      {
        title: "Armoire",
        price: 400,
        tags: ["Décoration", "Meubles"],
      },
      {
        title: "Scooter électrique",
        price: 1000,
        tags: ["Blanc", "Scooter"],
      },
    ],
  },
  {
    title: "Armoire",
    price: 400,
    tags: ["Décoration", "Meubles"],
    closestAds: [
      {
        title: "Tapis",
        price: 150,
        tags: ["Blanc", "Décoration"],
      },
    ],
  },
  {
    title: "Scooter électrique",
    price: 1000,
    tags: ["Blanc", "Scooter"],
    closestAds: [
      {
        title: "Tapis",
        price: 150,
        tags: ["Blanc", "Décoration"],
      },
    ],
  },
  {
    title: "Pots de peinture (don)",
    price: 0,
    tags: [],
    closestAds: [],
  },
  {
    title: "Boîtes à thé",
    price: 5,
    tags: ["Rangements"],
    closestAds: [],
  },
  {
    title: "Chaussures (41)",
    price: 5,
    tags: ["Bleu", "Rouge"],
    closestAds: [
      {
        title: "Vélo de course",
        price: 100,
        tags: ["Bleu", "Rouge", "Course"],
      },
    ],
  },
] as AdWithTagsAndClosestAds[];
