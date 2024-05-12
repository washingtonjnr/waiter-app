import { ProductType } from "../@types/Product";

export const products: ProductType[] = [
  {
    _id: "6372e040f52e37ef85fe2c5e",
    name: "Pizza quatro queijos",
    description: "Deliciosa pizza quatro queijos com borda simples",
    image: "1713379902172-quatro-queijos.png",
    price: 40,
    ingredients: [
      {
        name: "Mussarela",
        icon: "🧀",
        _id: "6372e040f52e37ef85fe2c5f"
      },
      {
        name: "Parmesão",
        icon: "🧀",
        _id: "6372e040f52e37ef85fe2c60"
      },
      {
        name: "Gouda",
        icon: "🧀",
        _id: "6372e040f52e37ef85fe2c61"
      },
      {
        name: "Brie",
        icon: "🧀",
        _id: "6372e040f52e37ef85fe2c62"
      }
    ],
  },
  {
    _id: "6372e276a381106c0f854cb3",
    name: "Coca cola",
    description: "Coca cola lata geladinha topzera",
    image: "1713380101209-coca-cola.png",
    price: 7,
    ingredients: [],
  },
];
