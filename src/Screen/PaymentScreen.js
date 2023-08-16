import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.PaymentScreenNameContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
            <Image
              source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
              style={styles.PaymentScreenLogo}
            />
          </TouchableOpacity>
          <View style={styles.PaymentScreenNameTextContainer}>
            <Text style={styles.PaymentScreenNameText}>Payments</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearchChange}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>sort</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  PaymentScreenNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginLeft: 20,
    marginTop: 50,
  },
  PaymentScreenLogo: {
    width: 32,
    height: 32,
    marginRight: 30,
  },
  PaymentScreenNameTextContainer: {
    width: 266,
    height: 28,
    justifyContent: 'center',
  },
  PaymentScreenNameText: {
    color: 'black',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.165,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#303A47',
    paddingHorizontal: 10,
    width: 270,
    height: 44,
    left: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 290,
    top: -50,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 35,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default PaymentScreen;
