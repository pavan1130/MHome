import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const AppSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.accountDetails}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Image
            source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
            style={styles.navigate}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.settingText}>Settings</Text>
        </View>
      </View>
      <View style={styles.menuModal}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('MHome/src/Screen/images/account_circle.png')}
            style={styles.menuicon}
          />
          <Text style={styles.menuItemText}>Account</Text>
          <Image
            source={require('MHome/src/Screen/images/arrow_forward.png')}
            style={styles.arrowicon}
          />
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('MHome/src/Screen/images/notifications.png')}
            style={styles.menuicon}
          />
          <Text style={styles.menuItemText}>Notification</Text>
          <Image
            source={require('MHome/src/Screen/images/arrow_forward.png')}
            style={styles.arrowicon2}
          />
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('appsettingScreen')}>
          <Image
            source={require('MHome/src/Screen/images/settings.png')}
            style={styles.menuicon}
          />
          <Text style={styles.menuItemText}>App</Text>
          <Image
            source={require('MHome/src/Screen/images/arrow_forward.png')}
            style={styles.arrowicon3}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('MHome/src/Screen/images/logout.png')}
            style={styles.menuicon}
          />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  accountDetails: {
    flexDirection: 'row',
    alignItems: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  settingText: {
    fontSize: 24,
    marginLeft: 15,
    color: 'black',
    top: 10,
  },
  navigate: {
    height: 40,
    width: 40,
    top: 10,
  },
  accountEmail: {
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  menuModal: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start',
    top: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    left: 18,
  },
  menuItemText: {
    fontSize: 20,
    marginLeft: 10,
  },

  menuicon: {
    width: 30,
    height: 30,
  },
  arrowicon: {
    width: 20,
    height: 20,
    marginRight: 50,
    right: -190,
  },
  arrowicon2: {
    width: 20,
    height: 20,
    marginRight: 50,
    right: -165,
  },
  arrowicon3: {
    width: 20,
    height: 20,
    marginRight: 50,
    right: -232,
  },
});

export default AppSetting;
