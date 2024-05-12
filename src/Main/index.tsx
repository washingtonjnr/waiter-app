import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
// Types
import { ProductType } from "../@types/Product";
import { CartItemType } from "../@types/CartItem";
import { CategoryType } from "../@types/Category";
// Services
import { api } from "../services/api";
import { apiRoutes } from "../services/apiRoutes";
// Components
import { Cart } from "../components/Cart";
import { Menu } from "../components/Menu";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Empty } from "../components/Icons/Empty";
import { Categories } from "../components/Categories";
import { TableModal } from "../components/TableModal";
// Styles
import {
  Container,
  CenteredContainer,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from "./styles";

export const Main = () => {
  // For aux
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // For requests
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  // For order table
  const [newTable, setNewTable] = useState<string | null>();
  const [isTableModalVisible, setIsTableModalVisible] =
    useState<boolean>(false);
  // For order items
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  // Function used by Menu component
  const handleAddToCart = (product: ProductType) => {
    if (!newTable) {
      setIsTableModalVisible(true);
    } else {
      setCartItems((prevItems) => {
        const itemIndex = prevItems.findIndex(
          (item) => item.product._id === product._id
        );

        if (itemIndex < 0) return [...prevItems, { product, quantity: 1 }];

        const newItems = [...prevItems];
        let item = newItems[itemIndex];

        newItems[itemIndex] = {
          ...item,
          quantity: item.quantity + 1,
        };

        return newItems;
      });
    }
  };

  // Function used by Cart component - prevents findIndex
  const handleActionToCart = (index: number, action: string = "add") => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      let item = newItems[index];

      // Increase the quantity
      if (action === "add") {
        newItems[index] = {
          ...item,
          quantity: item.quantity + 1,
        };

        return newItems;
      }

      // Remove item
      if (item.quantity <= 1) {
        newItems.splice(index, 1);

        return newItems;
      }

      // Decrease the quantity
      newItems[index] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newItems;
    });
  };

  // Function used by Cart component - remove order after submission
  const handleClearOrder = () => {
    setNewTable(null);

    setCartItems([]);
  };

  // GET products - Request
  const getProducts = (categoryId?: string | null) => {
    const productUrl = categoryId
      ? `${apiRoutes.CATEGORIES}/${categoryId}/products`
      : apiRoutes.PRODUCTS;

    return api.get(productUrl);
  };

  // GET categories - Request
  const getCategories = () => {
    return api.get(apiRoutes.CATEGORIES);
  };

  // GET products by category- Request
  const getProductsByCategory = async (categoryId?: string | null) => {
    setIsLoading(true);

    await getProducts(categoryId)
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    Promise.all([getCategories(), getProducts()])
      .then(([categoriesResponse, productsResponse]) => {
        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      })
      .catch(() => alert("ERRO!"))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!newTable) setCartItems([]);
  }, [newTable]);

  return (
    <>
      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={(table: string) => setNewTable(table)}
      />

      <Container>
        <Header selectedTable={newTable} onCancel={() => handleClearOrder()} />

        {categories.length > 0 && (
          <CategoriesContainer>
            <Categories
              categories={categories}
              onSelect={(id) => getProductsByCategory(id)}
            />
          </CategoriesContainer>
        )}

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#D73035" />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            {products.length <= 0 && (
              <CenteredContainer>
                <Empty />
                <Text color="#7e7e7e">Nenhum produto foi encontrado</Text>
              </CenteredContainer>
            )}

            {products.length > 0 && (
              <MenuContainer>
                <Menu
                  products={products}
                  onAdd={(product) => handleAddToCart(product)}
                />
              </MenuContainer>
            )}
          </>
        )}
      </Container>

      {!isLoading && (
        <Footer>
          <FooterContainer>
            {!newTable && (
              <Button onPress={() => setIsTableModalVisible(true)}>
                Novo pedido
              </Button>
            )}

            {newTable && (
              <Cart
                items={cartItems}
                selectedTable={newTable}
                onClear={() => handleClearOrder()}
                onAdd={(index) => handleActionToCart(index)}
                onRemove={(index) => handleActionToCart(index, "remove")}
              />
            )}
          </FooterContainer>
        </Footer>
      )}
    </>
  );
};
