import styled from "styled-components/native";

export const ProductItem = styled.View`
  gap: 4px;
  padding: 8px 0;
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
`;

export const ProductQuantity = styled.View`
  min-width: 20px;
  margin-left: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Actions = styled.View`
  gap: 12px;
  flex-direction: row;
`;

export const Summary = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalContainer = styled.View`
  flex: 1;
  margin-right: 32px;
`;
