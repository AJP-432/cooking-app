import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

// Example data for the list of recipes
const recipes = [
  { id: '1', title: 'Classic Greek Salad', rating: '4.3', time: '15 Mins' },
  { id: '2', title: 'Burgers', rating: '3.5', time: '5 Mins' },
  // Add more recipes...
];

const HomePage = () => {
  // Render a single recipe item
  const renderRecipe = ({ item }) => (
    
    <TouchableOpacity style={styles.recipeCard}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <Text>{item.rating}</Text>
      <Text>{item.time}</Text>
      {/* Add more details */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>19:27</Text>
      <Text style={styles.welcomeText}>Welcome Back John</Text>
      <Text>Remake your past recipes or generate new ones</Text>

      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2} // Display grid
      />

      {/* Bottom tab bar would go here /}
      {/ ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  header: {
    textAlign: 'right',
    margin: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  recipeCard: {
    flex: 1,
    margin: 10,
    marginVertical: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    // Add more styling...
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default HomePage;

