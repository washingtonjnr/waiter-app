type Routes = Record<string, string>;

export const apiRoutes = {
  AUTH: "/auth",
  CATEGORIES: "/categories",
  PRODUCTS: "/products",
  ORDERS: "/orders",
} satisfies Routes;
