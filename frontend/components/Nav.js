import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import Insight from "../pages/InsightsPage";
import Profile from "../pages/UserPage";

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
  return (
    <View
      style={{
        height: "10%",
        backgroundColor: "#dfdfdf",
        position: "relative",
      }}
    >
      <TouchableOpacity style={{ position: "absolute", left: "18%", top: "10%" }} onPress={() => {navigation.navigate('Insights')}}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../assets/analysis.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "absolute", right: "18%", top: "10%" }}  onPress={() => {navigation.navigate('Profile')}}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../assets/profile.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default Navigation;
