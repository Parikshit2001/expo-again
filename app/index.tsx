import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex items-center justify-center h-screen">
      <Text className="text-2xl font-">index</Text>
      <Link href={"/home"} className="text-blue-500">
        Go to Home
      </Link>
    </View>
  );
};

export default index;
