import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const NoNetworkScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('MHome/src/Screen/images/nonetwork.png')}
        style={styles.image}
      />

      <Text style={styles.heading}>No internet</Text>
      <Text style={styles.title}>
        Make sure your wi-fi or internet is turned on, then try again
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Retry button pressed')}>
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 326,
    height: 326,
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 39,
    letterSpacing: 0,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: 165,
    height: 56,
    paddingHorizontal: 56,
    paddingVertical: 16,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default NoNetworkScreen;
