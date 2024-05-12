import { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
// Components
import { Text } from "../Text";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
// Styles
import { Input, ModalBody, ModalForm, ModalHeader, Overlay } from "./styles";
// Utils
import { isAndroid } from "../../utils";

type TableModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
};

export const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [table, setTable] = useState<string | null>();

  const handleSave = (newTable: string) => {
    setTable(null);

    onSave(newTable);
    onClose()
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={isAndroid ? "height" : "padding"}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={() => onClose()}>
              <Close color="#7e7e7e" />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <Input
              maxLength={2}
              keyboardType="number-pad"
              placeholder="Número da mesa"
              placeholderTextColor="#7e7e7e"
              onChangeText={(value) => setTable(value)}
            />

            <Button
              isDisabled={!table || table.length === 0}
              onPress={() => {
                if (table) handleSave(table);
              }}
            >
              Salvar
            </Button>
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
