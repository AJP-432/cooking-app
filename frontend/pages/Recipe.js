import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../style/CustomButton";

export default function Recipe({ route }) {
  const [recipeData, setRecipe] = useState("Loading...");
  const [ingredientsData, setIngredients] = useState([]);
  const [stepsData, setSteps] = useState([]);
  const [nutritionData, setNutrition] = useState([]);
  // const [output, setOutput] = useState({recipeName: "...", ingredients: [], steps: [], nutrition: {macro: "30", calories: "300k"}})
  const {
    ingredients = ["cereal"],
    mealType = "Italian",
    goals = "High Protein",
  } = route.params;
  
  useEffect(() => {
    fetchOutput();
  }, []);

  const displaySteps = () => {
    return (
      <View style={styles.containerBlock}>
        {stepsData.map((step, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.stepTitle}>Step {index + 1}</Text>
            <Text style={styles.stepDescription}>{step}</Text>
          </View>
        ))}
      </View>
    );
  };

  const displayNutrition = () => {
    return (
      <View style={styles.containerNutrition}>
        {Object.entries(nutritionData).map(([key, value], index) => (
          <View key={index} style={styles.nutritionCard}>
            <Text style={styles.nutritionLabel}>{key}</Text>
            <Text style={styles.nutritionValue}>{value}</Text>
          </View>
        ))}
      </View>
    );
  }


  const fetchOutput = () => {
    if (ingredients[0] == "") return;

    fetch("http://172.18.75.227:3000/generate-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other necessary headers here
      },
      body: JSON.stringify({
        ingredients: ingredients,
        mealType: mealType,
        goals: goals,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("recipeName", data, data["recipeName"]);
        console.log(typeof data, Object.keys(data));
        console.log("recipeName", data.recipeName);

        setRecipe(data.recipeName);
        setIngredients(data["ingredients"]);
        setSteps(data["steps"]);
        setNutrition(data["nutrition"]);
      })
      .catch((error) => console.error("Error:", error));
  };

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
        <Text style={{ width: "80%" }}>{ingredientsData.toString()}</Text>
        {/* Dynamic render list here */}
      </View>

      {/* Steps */}
      <View style={styles.sections}>
        <Text style={styles.title}>List of Steps</Text>
        <View style={{ width: "80%" }}>{displaySteps()}</View>
        {/* Dynamic render steps here (set default to 5?) */}
      </View>

      {/* Nutrition Overview */}
      <View style={styles.sections}>
        <Text style={[styles.title, {marginBottom: 15}]}>Nutrition Overview</Text>
        {/* Dynamic render steps here (set default to 5?) */}
        <Text style={{ width: "80%" }}>{displayNutrition()}</Text>
      </View>

      <CustomButton title="Regenerate Recipe" callbackFunction={() => {fetchOutput()}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    margin: "7%",
  },

  containerBlock: {
    marginTop: 20
  },
  containerNutrition: {
    marginTop: 30,
  },
  headerNutrition: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
  },
  titleBox: {
    width: "80%",
    marginTop: "20%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
  },

  subheading: {
    fontSize: 20,
    fontWeight: "200",
  },

  sections: {
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    color: "#71B1A1",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#d9d9d9",
    opacity: 0.7,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 5,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 14,
    fontWeight: 100
  },
  nutritionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
  },
  nutritionLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  nutritionValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#707070',
  },
});
