import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(
      () => (ring1Padding.value = withSpring(ring1Padding.value + hp(5))),
      100
    );
    setTimeout(
      () => (ring2Padding.value = withSpring(ring2Padding.value + hp(5.5))),
      300
    );

    setTimeout(() => {
      navigation.navigate("Home");
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* Logo Image With Rings */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2Padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1Padding }}
        >
          <Image
            source={require("../assets/images/shoppingCartImg.png")}
            style={{ width: hp(20), height: hp(20), borderRadius: 100 }}
          />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View className="flex items-center mt-10">
        <Text
          style={{ fontSize: hp(7) }}
          className="font-bold text-white tracking-widest"
        >
          E-CART
        </Text>
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-bold text-white tracking-widest"
        >
          Get latest electronic items at affordable pice
        </Text>
      </View>
    </View>
  );
}
