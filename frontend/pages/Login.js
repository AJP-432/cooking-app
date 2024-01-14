import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from '../style/CustomButton';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Login */}
      <Text style={styles.title}>Login</Text>
      
      {/* Don't muck it up */}
      <Text style={styles.subtitle}>Enter your details. Don't muck it up!</Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Email"
      />

      {/* Password */}
      <TextInput 
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Enter Password"
      />

      {/* Sign in */}
      <View style={styles.button}>
        <CustomButton title="Login" callbackFunction={() => {navigation.navigate("Home")}}/> 
      </View>
      

      {/* Sign up */}
      <Text style={styles.signUpText} onPress={() => {navigation.navigate("Home")}}>Sign up</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    height: '100%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    borderRadius: 6,
    borderColor: "grey",
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  signUpText: {
    marginTop: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});
