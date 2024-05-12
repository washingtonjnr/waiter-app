import { ActivityIndicator } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

type ButtonProps = {
  children: string;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = ({
  children,
  isDisabled,
  isLoading,
  onPress,
}: ButtonProps) => {
  return (
    <Container onPress={onPress} disabled={isDisabled || isLoading}>
      {isLoading && <ActivityIndicator color="#FFF" />}

      {!isLoading && (
        <Text weight="600" color="#FFF">
          {children}
        </Text>
      )}
    </Container>
  );
};
