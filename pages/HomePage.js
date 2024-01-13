// Import necessary components and modules from React Native
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomePage = () => {
    // Use return to render JSX
    return (
       
        <View>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.heading}>Remake your past recipes or generate new ones</Text>
        </View>
    );
}

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomePage;
