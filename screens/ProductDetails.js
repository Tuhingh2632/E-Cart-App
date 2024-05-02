import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ArrowTrendingUpIcon,
  ChevronLeftIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
export default function ProductDetails(props) {
  let item = props.route.params;
  const [isFav, setIsFav] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <ExpoStatusBar style="light" />
      {/* Product Image */}
      <View className="flex-grow justify-center mt-1">
        <Image
          source={{ uri: item.thumbnail }}
          style={{
            width: wp(98),
            height: hp(50),
            borderRadius: 53,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            marginTop: 4,
            marginLeft: 4,
          }}
        />
      </View>

      {/* back button */}
      <View className="w-full absolute flex-row justify-between items-center pt-14 mt-2">
        <TouchableOpacity
          className="p-2 rounded-full ml-5 bg-white"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbb24" />
        </TouchableOpacity>
        {/* my favourites button */}
        <TouchableOpacity
          className="p-2 rounded-full mr-5 bg-white"
          onPress={() => setIsFav(!isFav)}
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isFav ? "red" : "grey"}
          />
        </TouchableOpacity>
      </View>

      {/* product description */}
      <View className="px-4 flex justify-between space-y-4 pt-8">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(3) }}
            className="font-bold flex-1 text-neutral-700"
          >
            {item.title}
          </Text>
          <Text
            style={{ fontSize: hp(2) }}
            className="font-medium flex-1 text-neutral-500"
          >
            {item.brand}
          </Text>
          <Text style={{ fontSize: hp(1.6) }} className=" text-neutral-700">
            {item.description}
          </Text>
        </View>

        <View className="flex-row justify-around">
          <View className="flex rounded-full bg-amber-300 p-2">
            <View
              style={{ height: hp(6.5), width: hp(6.5) }}
              className="bg-white rounded-full flex items-center justify-center"
            >
              <CurrencyDollarIcon
                size={hp(4)}
                strokeWidth={2.5}
                color="#525252"
              />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{ fontSize: hp(2) }}
                className="font-bold text-neutral-700"
              >
                {item.price}
              </Text>
              <Text
                style={{ fontSize: hp(1.7) }}
                className="font-bold text-neutral-600"
              >
                Price
              </Text>
            </View>
          </View>

          <View className="flex rounded-full bg-amber-300 p-2">
            <View
              style={{ height: hp(6.5), width: hp(6.5) }}
              className="bg-white rounded-full flex items-center justify-center"
            >
              <StarIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{ fontSize: hp(2) }}
                className="font-bold text-neutral-700"
              >
                {item.rating}
              </Text>
              <Text
                style={{ fontSize: hp(1.7) }}
                className="font-bold text-neutral-600"
              >
                Rating
              </Text>
            </View>
          </View>

          <View className="flex rounded-full bg-amber-300 p-2">
            <View
              style={{ height: hp(6.5), width: hp(6.5) }}
              className="bg-white rounded-full flex items-center justify-center"
            >
              <ReceiptPercentIcon
                size={hp(4)}
                strokeWidth={2.5}
                color="#525252"
              />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{ fontSize: hp(2) }}
                className="font-bold text-neutral-700"
              >
                {`${item.discountPercentage}%`}
              </Text>
              <Text
                style={{ fontSize: hp(1.7) }}
                className="font-bold text-neutral-600"
              >
                Discount
              </Text>
            </View>
          </View>

          <View className="flex rounded-full bg-amber-300 p-2">
            <View
              style={{ height: hp(6.5), width: hp(6.5) }}
              className="bg-white rounded-full flex items-center justify-center"
            >
              <ArrowTrendingUpIcon
                size={hp(4)}
                strokeWidth={2.5}
                color="#525252"
              />
            </View>
            <View className="flex items-center py-2 space-y-1">
              <Text
                style={{ fontSize: hp(2) }}
                className="font-bold text-neutral-700"
              >
                {`${item.stock}`}
              </Text>
              <Text
                style={{ fontSize: hp(1.7) }}
                className="font-bold text-neutral-600"
              >
                Stock
              </Text>
            </View>
          </View>
        </View>

        <View className="space-y-4">
          <Text
            style={{ fontSize: hp(2.5) }}
            className="font-bold flex-1 text-neutral-700"
          >
            Product Details :
          </Text>
          <View className="space-y-2 ml-3">
            <View className="flex-row space-x-4">
              <View
                style={{ height: hp(1.5), width: hp(1.5) }}
                className="bg-amber-300 rounded-full"
              />
              <View className="flex-row space-x-2 items-center justify-center">
                <Text
                  style={{ fontSize: hp(2) }}
                  className="font-extrabold text-neutral-700"
                >
                  Price:
                </Text>
                <Text className="font-medium text-neutral-600">
                  {`${item.price}$`}
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-4">
              <View
                style={{ height: hp(1.5), width: hp(1.5) }}
                className="bg-amber-300 rounded-full"
              />
              <View className="flex-row space-x-2 items-center justify-center">
                <Text
                  style={{ fontSize: hp(2) }}
                  className="font-extrabold text-neutral-700"
                >
                  Discount:
                </Text>
                <Text className="font-medium text-neutral-600">
                  {`${item.discountPercentage} %`}
                </Text>
              </View>
            </View>

            <View className="flex-row space-x-4">
              <View
                style={{ height: hp(1.5), width: hp(1.5) }}
                className="bg-amber-300 rounded-full"
              />
              <View className="flex-row space-x-2 items-center justify-center">
                <Text
                  style={{ fontSize: hp(2) }}
                  className="font-extrabold text-neutral-700"
                >
                  Rating:
                </Text>
                <Text className="font-medium text-neutral-600">
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
