import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageSize = screenWidth / 2;
const marginTop = screenHeight / 7;

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image
        source={require('../assets/gordon-ramsay.jpg')} // TODO: Replace with Google Account image, name, and other information
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Gordon Ramsay</Text>
      <Text style={styles.userInfo}>Username: XXXX</Text>
      <Text style={styles.userInfo}>Gender: XXXX</Text>
      <Text style={styles.userInfo}>Height: XXXX</Text>
      <Text style={styles.userInfo}>Weight: XXXX</Text>
    </View>
  );
};

export default function UserPage() {
  return <UserProfile />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: marginTop,
    backgroundColor: '#FFF',
  },
  profileImage: {
    width: imageSize / 1.5,
    height: imageSize / 1.5,
    borderRadius: imageSize / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  userName: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  userInfo: {
    fontSize: 16,
    color: '#808080',
  }
});
