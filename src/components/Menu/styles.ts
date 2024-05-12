import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Product = styled.TouchableOpacity`
  gap: 16px;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  gap: 6px;
  padding-right: 16px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  right: 0;
  bottom: 3px;
  padding: 4px;
  position: absolute;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  margin: 16px 0;
  background-color: rgba(204, 204, 204, .3);
`;
