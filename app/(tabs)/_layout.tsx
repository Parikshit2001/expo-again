import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="create" />
        <Tabs.Screen name="bookmark" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </>
  );
};

export default TabsLayout;
