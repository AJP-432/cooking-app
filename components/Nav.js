import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Insight from '../pages/InsightsPage';
import Profile from '../pages/UserPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#129575',
            inactiveTintColor: '#bdc3c7',
          }}
        >
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="body" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Insight"
            component={Insight}
            options={{
              tabBarLabel: 'Insight',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="analytics" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
        
        {/* Add button in the middle */}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="md-add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  addButton: {
    backgroundColor: '#129575',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: '5%', // Adjust this value based on your design
    left: '50%',   // Adjust this value based on your design
    marginLeft: -30,
    marginBottom: -10,
    // elevation: 50,
  },
});

export default Navigation;



