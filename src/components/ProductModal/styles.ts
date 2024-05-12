import styled from "styled-components/native";

export const ModalBody = styled.View`
  flex: 1;
  position: relative;
  background-color: #FAFAFA;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  margin: 16px;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  background-color: rgba(0, 0, 0, .25);
`;

export const ModalSection = styled.View`
  flex: 1;
  padding: 32px 24px;
`;

export const BoxIngredients = styled.View`
  gap: 8px;
  flex: 1;
  margin-top: 32px;
`;

export const Ingredient = styled.View`
  gap: 20px;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 4px;
  align-items: center;
  flex-direction: row;
  border: 1px solid rgba(204, 204, 204, .3);
`;

export const Footer = styled.View`
  min-height: 90px;
  padding: 16px 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterContainer = styled.SafeAreaView`
  background-color: #FFF;
`;

export const Price = styled.View`

`;
