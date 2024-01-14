import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salad</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D9D9D9', 
    padding: 15,
    borderRadius: 8,
    opacity: 0.5,
    width: 150,
    height: 103,
    flexShrink: 0, 
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RecipeCard;