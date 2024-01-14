import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your screen components
//import HomePage from '../pages/HomePage';
import Insight from '../pages/InsightsPage';
import Profile from '../pages/UserPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#3498db', // Set your preferred active color
          inactiveTintColor: '#bdc3c7', // Set your preferred inactive color
        }}
      >
        <Tab.Screen
          name="Insight"
          component={Insight}
          options={{
            tabBarLabel: 'Insight',
            tabBarIcon: ({ color, size }) => (
              <Icon name="insights" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="profile" color={color} size={size} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

