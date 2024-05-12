import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 24px;
  align-items: stretch;
  justify-content: center;
  background-color: rgba(0, 0, 0, .6);
`;

export const ModalBody = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #FAFAFA;
`;

export const ModalHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalForm = styled.View`

`;

export const Input = styled.TextInput`
  padding: 16px;
  margin: 32px 0;
  border-radius: 8px;
  background-color: #FFF;
  border: 1px solid rgba(204, 204, 204, .5);
`;
