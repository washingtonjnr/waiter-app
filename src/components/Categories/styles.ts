// Styled
import styled from "styled-components/native";
// Utils
import { isAndroid } from "../../utils";

export const Category = styled.TouchableOpacity`
  margin-left: 24px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-bottom: 8px;
  align-items: center;
  background-color: #FFF;
  justify-content: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : .1});
`;
