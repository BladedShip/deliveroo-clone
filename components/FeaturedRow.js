import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00cc88" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        nestedScrollEnabled={true}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="PaniPuri Bois"
          rating={4.5}
          genre="Indian"
          address="Maleshwaram Area"
          short_description="Test Description must be really long so that it tests the shits out"
          dishes={[]}
          long={7}
          lat={76}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="PaniPuri Bois"
          rating={4.5}
          genre="Indian"
          address="Maleshwaram Area"
          short_description="Test Description must be really long so that it tests the shits out"
          dishes={[]}
          long={7}
          lat={76}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="PaniPuri Bois"
          rating={4.5}
          genre="Indian"
          address="Maleshwaram Area"
          short_description="Test Description must be really long so that it tests the shits out"
          dishes={[]}
          long={7}
          lat={76}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="PaniPuri Bois"
          rating={4.5}
          genre="Indian"
          address="Maleshwaram Area"
          short_description="Test Description must be really long so that it tests the shits out"
          dishes={[]}
          long={7}
          lat={76}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
