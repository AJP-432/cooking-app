import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install the expo vector-icons package

const CustomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="md-information-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search or start new chat"
      />
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="md-add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
  },
  iconButton: {
    // Styles for the info icon button
  },
  addButton: {
    // Styles for the add button
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  input: {
    // Styles for the text input
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  }
});

export default CustomBar;
