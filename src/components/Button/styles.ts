import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    min-width: 50px;
    padding: 14px 24px;
    border-radius: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${({ disabled }) => (disabled ? "#999" : "#D73035")};
`;
