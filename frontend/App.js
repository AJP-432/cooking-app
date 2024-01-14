import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./pages/HomePage"
import Navigation from "./components/Nav"
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NewRecipe from './pages/NewRecipePage';
import Recipe from './pages/Recipe';
import Profile from '../pages/UserPage';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>App.js to start working on your app!</Text>
      <Profile/>
      // <Nav/>
      // <StatusBar style="auto" />
    // </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
