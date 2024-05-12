export type ProductType = {
  _id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  ingredients: {
    name: string,
    icon: string,
    _id: string,
  }[]
}
