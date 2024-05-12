import { Modal } from "react-native";
// Components
import { Text } from "../Text";
import { CheckCircle } from "../Icons/CheckCircle";
// Style
import { Container, OkButton } from "./styles";

type OrderConfirmedModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const OrderConfirmedModal = ({ visible, onClose }: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <Text>
          <CheckCircle />
        </Text>

        <Text color="#FFF" size={18} weight="600">
          Pedido confirmado
        </Text>

        <Text
          size={16}
          color="#FFF"
          style={{ maxWidth: 215, textAlign: "center" }}
        >
          O pedido já entrou na fila de produção
        </Text>

        <OkButton onPress={() => onClose()}>
          <Text weight="600" color="#D73035">
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
};
