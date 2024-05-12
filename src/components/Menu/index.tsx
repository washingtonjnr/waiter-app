import { useState } from "react";
import { FlatList } from "react-native";
// Types
import { ProductType } from "../../@types/Product";
// Components
import { Text } from "../Text";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
// Styles
import {
  Product,
  ProductImage,
  ProductDetails,
  AddToCartButton,
  Separator,
} from "./styles";
// Utils
import { formatCurrency } from "../../utils/formatters";
//
import { apiUrl } from "../../services/api";

type MenuProps = {
  products: ProductType[];
  onAdd: (product: ProductType) => void;

}

export const Menu = ({ products, onAdd }: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  //
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();

  const handleOpenModal = (product: ProductType) => {
    setSelectedProduct(product);

    setIsModalVisible(true);
  }

  const handleAddProduct = (product: ProductType) => {
    onAdd(product);

    setIsModalVisible(false);
  }

  return (
    <>
      <ProductModal
        product={selectedProduct}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={(product: ProductType) => handleAddProduct(product)}
      />

      <FlatList
        data={products}
        style={{ marginTop: 34 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
        keyExtractor={({ _id }) => _id}
        ItemSeparatorComponent={Separator}
        renderItem={({
          item: product,
        }) => {
          const { description, image, ingredients, name, price } = product;

          return (
            <Product
              onPress={() => handleOpenModal(product)}
            >
              <ProductImage
                source={{
                  uri: `${apiUrl}/uploads/${image}`,
                }}
              />

              <ProductDetails>
                <Text weight="600">{name}</Text>
                <Text size={14} color="#7e7e7e">
                  {description}
                </Text>
                <Text size={14} weight="600">
                  {formatCurrency(price)}
                </Text>
              </ProductDetails>

              <AddToCartButton
                onPress={() => onAdd(product)}
              >
                <PlusCircle />
              </AddToCartButton>
            </Product>
          );
        }}
      />
    </>
  );
};
