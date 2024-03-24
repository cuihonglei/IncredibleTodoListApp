import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

  return (
    <View style={styles.container}>
      <Text>I am the header.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default Header;