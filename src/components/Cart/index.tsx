import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
// Types
import { CartItemType } from "../../@types/CartItem";
// Components
import { Text } from "../Text";
import { Button } from "../Button";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
// Styles
import {
  ProductItem,
  ProductImage,
  ProductQuantity,
  ProductDetails,
  Actions,
  Summary,
  TotalContainer,
} from "./styles";
// Utils
import { formatCurrency } from "../../utils/formatters";
//
import { api, apiUrl } from "../../services/api";
import { apiRoutes } from "../../services/apiRoutes";

type CartProps = {
  selectedTable: string;
  items: CartItemType[];
  onAdd: (index: number) => void;
  onRemove: (index: number) => void;
  onClear: () => void;
};

export const Cart = ({
  selectedTable,
  items,
  onAdd,
  onRemove,
  onClear,
}: CartProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  //
  const hasItems = items.length > 0;
  const totalPrice = items.reduce(
    (prevValue, { product, quantity }) => prevValue + product.price * quantity,
    0
  );

  const handleConfirmOrder = async () => {
    setIsLoading(true);

    const payload = {
      table: selectedTable,
      products: items.map(({ product, quantity }) => ({
        product: product._id,
        quantity,
      })),
    };

    api
      .post(apiRoutes.ORDERS, payload)
      .then(() => setIsModalVisible(true))
      .catch(() => alert("Erro ao enviar o pedido!"))
      .finally(() => setIsLoading(false));
  };

  const handleConfirmed = () => {
    setIsModalVisible(false);

    onClear();
  };

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onClose={() => handleConfirmed()}
      />

      {hasItems && (
        <FlatList
          data={items}
          style={{ marginBottom: 20, maxHeight: 150 }}
          keyExtractor={({ product }) => product._id}
          renderItem={({ item: { product, quantity }, index }) => {
            const { image, name, price } = product;

            return (
              <ProductItem>
                <ProductImage
                  source={{
                    uri: `${apiUrl}/uploads/${image}`,
                  }}
                />

                <ProductQuantity>
                  <Text size={14} color="#7e7e7e">
                    {quantity}x
                  </Text>
                </ProductQuantity>

                <ProductDetails>
                  <Text size={14} weight="600">
                    {name}
                  </Text>

                  <Text size={14} color="#7e7e7e">
                    {formatCurrency(price)}
                  </Text>
                </ProductDetails>

                <Actions>
                  <TouchableOpacity onPress={() => onRemove(index)}>
                    <MinusCircle />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => onAdd(index)}>
                    <PlusCircle />
                  </TouchableOpacity>
                </Actions>
              </ProductItem>
            );
          }}
        />
      )}

      <Summary>
        <TotalContainer>
          {hasItems && (
            <>
              <Text size={14} color="#7e7e7e">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(totalPrice)}
              </Text>
            </>
          )}

          {!hasItems && <Text color="#999">Seu carrinho está vazio</Text>}
        </TotalContainer>

        <Button
          isLoading={isLoading}
          isDisabled={!hasItems}
          onPress={() => handleConfirmOrder()}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
};
