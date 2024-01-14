import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Navigation from "../components/Nav";
import { Ionicons } from "@expo/vector-icons";

// Example data for the list of recipes
const recipes = [
  { id: "1", title: "Classic Greek Salad", time: "15 Mins" },
  { id: "2", title: "Burgers", time: "5 Mins" },
  // Add more recipes...
];

const HomePage = ({ navigation }) => {
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
    <View style={{height: "100%"}}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back John</Text>
        <Text>Remake your past recipes or generate new ones</Text>

        <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={1} // Display grid
        />

        {/* Bottom tab bar would go here /}
      {/ ... */}
        
      </View>
      <Navigation />
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="md-add" size={24} color="white" onPress={() => {navigation.navigate("NewRecipe")}}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    marginTop: "20%",
    margin: "7%",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  recipeCard: {
    flex: 1,
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#129575",
    opacity: 0.8,
    width: "80%"
    // Add more styling...
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#129575",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    elevation: 3,

  },
});

export default HomePage;
