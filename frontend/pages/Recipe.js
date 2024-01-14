import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Recipe({route}) {
  
  const [recipeData, setRecipe] = useState('');
  const [ingredientsData, setIngredients] = useState([]);
  const [stepsData, setSteps] = useState([]);
  const [nutritionData, setNutrition] = useState([]);
  // const [output, setOutput] = useState({recipeName: "...", ingredients: [], steps: [], nutrition: {macro: "30", calories: "300k"}})
  const {ingredients = ["cereal"], mealType = "Italian", goals = "High Protein"} = route.params
  useEffect(() => {
    fetchOutput();
  }, []);

  const fetchOutput = () => {

    if (ingredients[0] == "") return;
    console.log("HDOSIF");
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
    .then(data => {
      console.log("recipeName", data, data["recipeName"]);
      console.log(typeof data, Object.keys(data));
      console.log("recipeName", data.recipeName);

      setRecipe(data.recipeName);
      setIngredients(data["ingredients"]);
      setSteps(data["steps"]);
      setNutrition(data["nutrition"]);
    })
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
        <Text style={styles.heading}>{recipeData}</Text>
        <Text style={styles.subheading}>What are you cooking today?</Text>
      </View>


      {/* Ingredients */}
      <View style={styles.sections}>
        <Text style={styles.title}>List of Ingredients</Text>
        <Text style={{width: "80%"}}>{ingredientsData.toString()}</Text>
        {/* Dynamic render list here */}
      </View>

      {/* Steps */}
      <View style={styles.sections}>
      <Text style={styles.title}>List of Steps</Text>
      <Text style={{width: "80%"}}>{stepsData.toString()}</Text>
        {/* Dynamic render steps here (set default to 5?) */}
      </View>

      {/* Nutrition Overview */}
      <View style={styles.sections}>
      <Text style={styles.title}>Nutrition Overview</Text>
        {/* Dynamic render steps here (set default to 5?) */}
        <Text style={{width: "80%"}}>{nutritionData.toString()}</Text>
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
    width: "80%",
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