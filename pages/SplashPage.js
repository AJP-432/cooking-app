import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import CustomButton from '../style/CustomButton';

const splashUrl = "../assets/splash-background.png";
const gordanUrl = "../assets/gordan.png";

export default function SplashPage() {
  return (
    <ImageBackground style={styles.image} source={require(splashUrl)}>
      <View style={styles.container} >
        {/* Gordon ramsay image */}
        <Image source={require(gordanUrl)} style={styles.splashImage}/>

        {/* Oi, Get cooking!*/}
        <Text style={styles.splashHeading}>Oi, Get Cooking!</Text>

        {/* Enter Button */}
        <CustomButton title="Start Cooking" callbackFunction={() => {}} style={styles.splashButton}/> 
      </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },

  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    paddingTop: "30%",
    paddingBottom: "10%",
  },

  splashImage: {
    borderRadius: 15
  },
  
  splashHeading: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  splashButton: {
    flex: 2
  },
});
