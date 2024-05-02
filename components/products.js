import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Products({ products }) {
  const navigation = useNavigation();
  return (
    <View className="mx-4 mb-12 space-y-3">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Products
      </Text>
      <View>
        {products.length == 0 ? null : (
          <MasonryList
            data={products}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <ProductCard item={item} index={i} navigation={navigation} />
            )}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}

const ProductCard = ({ item, index, navigation }) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => navigation.navigate("ProductDetails", { ...item })}
      >
        <Image
          source={{ uri: item.thumbnail }}
          style={{
            width: "100%",
            height: index % 3 == 0 ? hp(25) : hp(35),
            borderRadius: 35,
          }}
          className="bg-black/5"
        />
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-semibold ml-2 text-neutral-600"
        >
          {item.title.length > 20
            ? item.title.slice(0, 20) + "..."
            : item.title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
