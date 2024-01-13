import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./pages/HomePage"
import Nav from "./components/Nav"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App.js to start working on your app!</Text>
      <HomePage />
      <Nav/>
      <StatusBar style="auto" />
    </View>
    
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
