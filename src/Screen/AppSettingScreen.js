import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import toggleOffImage from 'MHome/src/Screen/images/toggleoff.jpg';
import toggleOnImage from 'MHome/src/Screen/images/toggleon.jpg';
import {useNavigation} from '@react-navigation/native';

const AppSettingScreen = () => {
  const navigation = useNavigation();

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isAutoUpdateEnabled, setIsAutoUpdateEnabled] = useState(false);

  const languages = [
    {code: 'en', name: 'English'},
    {code: 'zh', name: 'Mandarin'},
    {code: 'hi', name: 'Hindi'},
    {code: 'es', name: 'Spanish'},
    {code: 'fr', name: 'French'},
    {code: 'ar', name: 'Modern Standard Arabic'},
    {code: 'bn', name: 'Bengali'},
    {code: 'ru', name: 'Russian'},
    {code: 'en', name: 'English'},
    {code: 'zh', name: 'Mandarin'},
    {code: 'hi', name: 'Hindi'},
    {code: 'es', name: 'Spanish'},
    {code: 'fr', name: 'French'},
    {code: 'ar', name: 'Modern Standard Arabic'},
    {code: 'bn', name: 'Bengali'},
    {code: 'ru', name: 'Russian'},
    {code: 'en', name: 'English'},
    {code: 'zh', name: 'Mandarin'},
    {code: 'hi', name: 'Hindi'},
    {code: 'es', name: 'Spanish'},
    {code: 'fr', name: 'French'},
    {code: 'ar', name: 'Modern Standard Arabic'},
    {code: 'bn', name: 'Bengali'},
    {code: 'ru', name: 'Russian'},
  ];

  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={styles.headerRow}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate('appsetting')}>
          <Image
            source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
            style={styles.navigate}
          />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>App Settings</Text>
      </View>

      {/* Language */}
      <Text style={styles.boldText1}>Language</Text>
      <View style={styles.languagePickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}
          style={{flex: 1}}>
          {languages.map(language => (
            <Picker.Item
              key={language.code}
              label={language.name}
              value={language.code}
            />
          ))}
        </Picker>
      </View>

      {/* Separator Line */}
      <View style={styles.separatorLine} />

      {/* Auto Update */}
      <View style={styles.row}>
        <Text style={styles.boldText}>Auto Update</Text>
        <TouchableOpacity
          onPress={() => setIsAutoUpdateEnabled(!isAutoUpdateEnabled)}
          style={[
            styles.toggleButton,
            {backgroundColor: isAutoUpdateEnabled ? 'green' : 'gray'},
          ]}>
          <Image
            source={isAutoUpdateEnabled ? toggleOnImage : toggleOffImage}
            style={styles.toggleImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigate: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
    color: 'black',
  },
  separatorLine: {
    marginTop: 20,
    borderBottomColor: '#7B7A7C',
    borderBottomWidth: 1,
  },

  boldText1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7B7A7C',
    marginTop: 40,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B7A7C',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 30,
    marginLeft: 20,
  },
  toggleButton: {
    borderRadius: 26,
    left: 160,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleImage: {
    width: 24,
    height: 24,
  },
  languagePickerContainer: {
    width: 348,
    height: 59,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#D9D9D9',
    marginTop: 50,
  },
});

export default AppSettingScreen;
