import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, callbackFunction }) => {
  return (
    <TouchableOpacity onPress={callbackFunction} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#129575",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // for Android shadow
        width: 300
      },
      textStyle: {
        color: 'white', // Set the text color
        textAlign: 'center',
        fontSize: 23,
        padding: 5,
      },
});

export default CustomButton;
