import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function NewRecipe({navigation}) {
  const [ingredients, setIngredients] = useState('');
  const [cuisines, setCuisines] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [otherRequests, setOtherRequests] = useState('');


  // Function to handle the generation of the recipe
  const handleGenerateRecipe = () => {
    // Implement your recipe generation logic here
  };


  return (
    <View style={styles.container}>
      
      <View>
        {/* Back Button */}
        <Text style={styles.header}>Create Recipes</Text>
      </View>

      <View style={[styles.inputBox, {marginTop: 80}]}>
        <Text style={styles.inputText}>Your Ingredients</Text>
        <TextInput
          placeholder="Lettuce, Tomatoes, Ground Beef ..."
          value={ingredients}
          onChangeText={setIngredients}
          style={styles.input}
        />
      </View>

      <View style={[styles.inputBox]}>
        <Text style={styles.inputText}>Cuisine Type</Text>
        <TextInput
          placeholder="Italian, Chinese, Thai, ..."
          value={cuisines}
          onChangeText={setCuisines}
          style={styles.input}
        />
      </View>

      
      <View style={styles.inputBox}>
      <Text style={{fontWeight: '100', marginBottom: 10}}>These suggestions are generated based on your past reviews and recipes</Text>
        <Text style={styles.inputText}>Your Fitness Goals</Text>
        <TextInput
          placeholder="High Protein, Low Fat, ..."
          value={fitnessGoals}
          onChangeText={setFitnessGoals}
          style={styles.input}
        />
      </View>

      <View style={[styles.inputBox, {marginBottom: 100}]}>
        <Text style={[styles.inputText]}>Other Requests?</Text>
        <TextInput
          placeholder="Vegan, Vegetarian, ..."
          value={otherRequests}
          onChangeText={setOtherRequests}
          style={styles.input}
        />
      </View>

      <CustomButton title="Generate" callbackFunction={() => {navigation.navigate("Recipe", {ingredients: ingredients.split(","), fitnessGoals: fitnessGoals, otherRequests: otherRequests, cuisines: cuisines})}}/>


      

    </View>
  );
}

import { Dimensions } from 'react-native';
import CustomButton from '../style/CustomButton';

// Get screen dimensions
const window = Dimensions.get('window');
const screenVh = window.height / 100;
const screenVw = window.width / 100;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600'
  },
  inputBox: {
    marginTop: 30,
    width: 70 * screenVw
  },
  inputText: {
    fontWeight: '700',
    color: '#129575'

  },
  input: {
    padding: 10,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: '100%'
    
  }
})