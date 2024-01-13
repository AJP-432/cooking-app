// THIS IS NOT USED YET

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = (props) => {
  return <Text style={[styles.globalFont, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  globalFont: {
    fontFamily: '', // Replace with your font name
    // Add other global styles if needed
  },
});

export default CustomText;