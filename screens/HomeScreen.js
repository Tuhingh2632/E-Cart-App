import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories.js";
import axios from "axios";
import Products from "../components/products.js";
import { debounce } from "lodash";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Electronics");
  const [input, setInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      console.log(res.data);
      if (res && res.data) {
        setCategories(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      if (res && res.data) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsBySearchQuery = debounce(async (input) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${input}`
      );
      console.log(res.data.products);
      if (res && res.data) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  const handleChange = (input) => {
    setInput(input);
    getProductsBySearchQuery(input);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* Avatar and Bell Icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../assets/images/free-avatar-370-456322.webp")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="grey" />
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hello Tuhin!!
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.5) }}
              className="font-semibold text-neutral-600"
            >
              Your shopping companion,
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            at your <Text className="text-amber-400">fingertips...</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any product"
            placeholderTextColor={"grey"}
            style={{ fontSize: hp(2) }}
            className="flex-1 text-base mb-1 pl-3 pb-0.2 tracking-wider"
            value={input}
            onChangeText={(text) => handleChange(text)}
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="grey" />
          </View>
        </View>

        {/* categories */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </View>

        {/* products */}
        <View>
          <Products products={products} />
        </View>
      </ScrollView>
    </View>
  );
}
