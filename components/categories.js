import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.name == activeCategory;
          let activeButtonCalss = isActive ? " bg-amber-400" : " bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat.name)}
              className="flex items-center space-y-1"
            >
              <View className={"rounded-full p-[6px] " + activeButtonCalss}>
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
