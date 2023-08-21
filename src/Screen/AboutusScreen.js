import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AboutusScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.appNameContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Image
            source={require('MHome/src/Screen/images/BackButton.png')}
            style={styles.appLogo}
          />
        </TouchableOpacity>
        <View style={styles.appNameTextContainer}>
          <Text style={styles.appNameText}>About Us</Text>
        </View>
      </View>
      <Text style={styles.welcomeText}>
        Welcome to our extraordinary world!
      </Text>
      <Text style={styles.descriptionText}>
        🚀 We are powered by cutting-edge AI technology, delivering seamless
        experiences to our users.
      </Text>
      <Text style={styles.descriptionText}>
        Join us on this thrilling journey as we redefine the boundaries of
        innovation and creativity. Together, we'll shape the future of
        possibilities! 🌟 #AI #Innovation #FutureForward
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  appNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginLeft: 20,
    marginTop: 50,
  },
  appLogo: {
    width: 32,
    height: 32,
    marginRight: 30,
  },

  appNameTextContainer: {
    width: 266,
    height: 28,
    justifyContent: 'center',
  },
  appNameText: {
    color: 'black',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.165,
  },
  welcomeText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#000000',
    marginTop: 30,
    left: 20,
  },
  descriptionText: {
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: '#00000080',
    marginTop: 30,
    left: 20,
  },
});

export default AboutusScreen;
