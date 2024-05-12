import { FlatList, Modal } from "react-native";
// Types
import { ProductType } from "../../@types/Product";
// Components
import { Text } from "../Text";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
// Styles
import {
  BoxIngredients,
  CloseButton,
  Footer,
  FooterContainer,
  Image,
  Ingredient,
  ModalBody,
  ModalSection,
  Price,
} from "./styles";
// Utils
import { formatCurrency } from "../../utils/formatters";
//
import { apiUrl } from "../../services/api";

type ProductModalProps = {
  product: ProductType | undefined;
  visible: boolean;
  onClose: () => void;
  onSave: (product: ProductType) => void;
};

export const ProductModal = ({
  product,
  visible,
  onClose,
  onSave,
}: ProductModalProps) => {
  if (!product) return null;

  const { name, description, ingredients, image, price } = product;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ModalBody>
        <Image
          source={{
            uri: `${apiUrl}/uploads/${image}`,
          }}
        >
          <CloseButton onPress={() => onClose()}>
            <Close></Close>
          </CloseButton>
        </Image>

        <ModalSection>
          <Text weight="600" size={24}>
            {name}
          </Text>
          <Text color="#7e7e7e">{description}</Text>

          {ingredients.length > 0 && (
            <BoxIngredients>
              <Text weight="600" color="#7e7e7e">
                Ingredientes
              </Text>

              <FlatList
                data={ingredients}
                style={{ marginTop: 8 }}
                keyExtractor={(ingredient) => ingredient._id}
                renderItem={({ item: { icon, name } }) => {
                  return (
                    <Ingredient>
                      <Text>{icon}</Text>

                      <Text size={14} color="#7e7e7e">
                        {name}
                      </Text>
                    </Ingredient>
                  );
                }}
              />
            </BoxIngredients>
          )}
        </ModalSection>

        <FooterContainer>
          <Footer>
            <Price>
              <Text color="#545454">Preço</Text>
              <Text size={20} weight="600">
                {formatCurrency(price)}
              </Text>
            </Price>

            <Button onPress={() => onSave(product)}>Adicionar ao perdido</Button>
          </Footer>
        </FooterContainer>
      </ModalBody>
    </Modal>
  );
};
