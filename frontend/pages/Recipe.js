import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import useFocusedListenersChildrenAdapter from '../node_modules/@react-navigation/core/lib/module/useFocusedListenersChildrenAdapter';

export default function Recipe({ingredients = ["Chicken Breast", "Cereal"], mealType = "Italian", goals = "High Protein"}) {
  
  const [output, setOutput] = useState({ingredients: [], steps: [], nutrition: {macro: "30", calories: "300k"}})

  useEffect(() => {
    fetchOutput();
  });

  const fetchOutput = () => {
    fetch('http://localhost:3000/generate-recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other necessary headers here
      },
      body: JSON.stringify({
        ingredients: ingredients,
        mealType: mealType,
        goals: goals
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
  
  // useEffect(() => {
  //   console.log("Hi");
  //   runConversation();
  // });

  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <View style={styles.titleBox}>
        <Text style={styles.heading}>Tomato Salad</Text>
        <Text style={styles.subheading}>What are you cooking today?</Text>
      </View>


      {/* Ingredients */}
      <View style={styles.sections}>
        <Text style={styles.title}>List of Ingredients</Text>
        {/* Dynamic render list here */}
      </View>

      {/* Steps */}
      <View style={styles.sections}>
      <Text style={styles.title}>List of Steps</Text>
        {/* Dynamic render steps here (set default to 5?) */}
      </View>

      {/* Nutrition Overview */}
      <View style={styles.sections}>
      <Text style={styles.title}>Nutrition Overview</Text>
        {/* Dynamic render steps here (set default to 5?) */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    margin: '7%'
  },

  titleBox: {
    marginTop: '20%'
  },
  heading: {
    fontSize: 30,
    fontWeight: '800'
  },

  subheading: {
    fontSize: 20,
    fontWeight: '200'
  },

  
  sections: {
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    color: '#71B1A1',
    fontWeight: '700'
  }
})