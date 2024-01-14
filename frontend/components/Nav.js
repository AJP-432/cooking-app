import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Insight from "../pages/InsightsPage";
import Profile from "../pages/UserPage";

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
  return (
    <View style={{ height: "30%" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Insights") {
              iconName = "ios-analytics";
            } else if (route.name === "Profile") {
              iconName = "ios-person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"green"} />;
          },
        })}
        
      >
        <Tab.Screen name="Insights" component={Insight} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
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
