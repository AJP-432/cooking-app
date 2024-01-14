import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the specific icon library you want to use

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => setActiveNav('#')} style={{ padding: 10 }}>
        <Icon name="home" size={30} color={activeNav === '#' ? 'blue' : 'black'} />
      </TouchableOpacity>
    </View>
  );
}

export default Nav;
