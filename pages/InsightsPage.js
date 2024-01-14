import React from 'react';
import {ScrollView, Text, View, StyleSheet, StatusBar} from 'react-native';

const Insight = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>insight</Text>
      <Text >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
      paddingTop: StatusBar.currentHeight,
    },
  });
  
  

export default Insight;
