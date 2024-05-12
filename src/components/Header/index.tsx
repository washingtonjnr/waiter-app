// Components
import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
// Styles
import { Container, Content, OrderHeader, Table } from "./styles";

type HeaderProps = {
  selectedTable: string | null | undefined;
  onCancel: () => void;
};

export const Header = ({ selectedTable, onCancel }: HeaderProps) => {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.6}>
            Bem-vindo(a) ao
          </Text>

          <Text weight="700">
            WAITER
            <Text>APP</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>

            <TouchableOpacity onPress={() => onCancel()}>
              <Text weight="600" size={14} color="#D73035">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#7e7e7e">Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  );
};
