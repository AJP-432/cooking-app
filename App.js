import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <Register />
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
