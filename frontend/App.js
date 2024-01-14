import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./pages/HomePage"
import Navigation from "./components/Nav"
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NewRecipe from './pages/NewRecipePage';
import Recipe from './pages/Recipe';
import Profile from './pages/UserPage';
import Insight from './pages/InsightsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer options={{
      headerStyle: null,
    }}>
    <Stack.Navigator initialRouteName="SplashPage">
      <Stack.Screen name="Home" component={HomePage}  options={{headerShown: false}}/>
      <Stack.Screen name="SplashPage" component={SplashPage} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewRecipe" component={NewRecipe} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Insights" component={Insight} />
      <Stack.Screen name="Navigation" component={Navigation} />
    </Stack.Navigator>
  </NavigationContainer>
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
