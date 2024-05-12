import { StatusBar } from "react-native";
// Styled
import styled from "styled-components/native";
// Utils
import { isAndroid } from "../utils";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const CenteredContainer = styled.SafeAreaView`
  flex: 1;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFA;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 90px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  background-color: #FFF;
`;

