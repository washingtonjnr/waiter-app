import { useState } from "react";
import { FlatList } from "react-native";
// Styles
import { Text } from "../Text";
import { Category, Icon } from "./styles";
import { CategoryType } from "../../@types/Category";

type CategoriesProps = {
  categories: CategoryType[],
  onSelect: (id: string | null) => void;
};

export const Categories = ({ categories, onSelect }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(prevId => {
      const value = prevId !== id ? id : null;

      onSelect(value);

      return value;
    });
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={(category) => category._id}
      renderItem={({ item: { icon, name, _id } }) => {
        const isSelected = selectedCategory === _id;

        return (
          <Category onPress={() => handleSelectCategory(_id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.6}>{icon}</Text>
            </Icon>

            <Text opacity={isSelected ? 1 : 0.6} size={14} weight="600">
              {name}
            </Text>
          </Category>
        );
      }}
    />
  );
};
