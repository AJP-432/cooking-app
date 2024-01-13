import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subheading}>Remake your past recipes or generate new ones</Text>
      </View>

      <View style={styles.subcontainer}>
        <RecipeCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    flexDirection: 'column',
    margin: 20,
  },
  subcontainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#555', // Change color to your preference
  },
});

export default HomePage;

