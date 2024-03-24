import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {

  return (
    <View style={styles.container}>
      <Text>I am the footer.</Text>
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

export default Footer;