import { AdWithTags } from "./answer";

export default {
  ads: [
    { title: "Vélo de course", price: 100, tags: ["Bleu", "Rouge", "Course"] },
    { title: "Robot mélangeur", price: 10, tags: ["Cuisine", "Robot"] },
    { title: "Vélo de ville", price: 50, tags: ["Vert", "Rouge", "Ville"] },
    { title: "Tapis", price: 150, tags: ["Blanc", "Décoration"] },
    { title: "Armoire", price: 400, tags: ["Décoration", "Meubles"] },
    { title: "Scooter électrique", price: 1000, tags: ["Blanc", "Scooter"] },
    { title: "Pots de peinture (don)", price: 0, tags: [] },
    { title: "Boîtes à thé", price: 5, tags: ["Rangements"] },
    { title: "Chaussures (41)", price: 5, tags: ["Bleu", "Rouge"] },
  ],
} as { ads: AdWithTags[] };
