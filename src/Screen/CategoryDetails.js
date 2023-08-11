import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>

      <Text style={styles.buttonText}>Go to Categories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryDetails;
