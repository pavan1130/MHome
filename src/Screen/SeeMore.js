import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import data1 from 'MHome/data1.json';
import {useNavigation} from '@react-navigation/native';

const KeyValueContainer = ({label, value}) => (
  <View style={styles.keyValueContainer}>
    <View style={styles.valueContainer}>
      <Text style={styles.valueText}>{value}</Text>
    </View>
    <Text style={styles.keyText}>{label}</Text>
  </View>
);
const UserCard = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    setuserData(data1.Seemore);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      {userData.map(Seemore => (
        <View key={Seemore.id} style={styles.card}>
          <Image source={{uri: Seemore.imageUrl}} style={styles.SeeMoreImage} />
          <Text style={styles.SeeMoreName}>{Seemore.name}</Text>
          <Text style={styles.SeeMoreDesignation}>{Seemore.designation}</Text>
          <Text style={styles.SeeMoreAvailability}>
            {Seemore.availability === 'Available'
              ? 'Available'
              : 'Not Available'}
          </Text>
          <Text style={styles.price}>$45/month</Text>
          <View style={styles.keyValueRow}>
            <KeyValueContainer
              label="Overall Attendance"
              value={Seemore.overAttendance}
            />
            <KeyValueContainer
              label="Average Ratings"
              value={Seemore.averageRatings}
            />
            <KeyValueContainer
              label="Sessions Completed"
              value={Seemore.sessionsCompleted}
            />
          </View>

          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image
        source={require('MHome/src/Screen/images/b.jpg')}
        style={styles.footerBackground}
      />
      <Image
        source={require('MHome/src/Screen/images/n.png')}
        style={styles.footerImage2}
      />
      <Image
        source={require('MHome/src/Screen/images/c.png')}
        style={styles.footerImage3}
      />
      <Image source={require('./images/h.png')} style={styles.footerImage4} />
      <Image source={require('./images/m.png')} style={styles.footerImage5} />
    </View>
  );
};

const SeeMore = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.appNameContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
            <Image
              source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
              style={styles.appLogo}
            />
          </TouchableOpacity>
          <View style={styles.appNameTextContainer}>
            <Text style={styles.appNameText}>Top Mentor</Text>
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
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
        <UserCard />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#303A47',
    paddingHorizontal: 10,
    width: 278,
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
  topSeemoreText: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: '700',
    color: '#7B7A7C',
    left: 30,
  },
  seeMoreButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-end',
    marginTop: -22,
    left: -30,
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerBackground: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerImage2: {
    position: 'absolute',
    top: 30,
    bottom: 20,
    left: 40,
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
  footerImage3: {
    position: 'absolute',
    top: -1,
    bottom: 20,
    left: '39%',
    width: 91,
    height: 91,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  footerImage4: {
    position: 'absolute',
    top: 30,
    bottom: 20,
    left: '52.5%',
    marginLeft: -25,
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
  footerImage5: {
    position: 'absolute',
    top: 30,
    bottom: 20,
    right: 40,
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    height: 220,
    width: 370,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },

  SeeMoreImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    top: 10,
  },
  SeeMoreName: {
    fontSize: 20,
    fontWeight: 'bold',
    top: -105,
    left: 100,
  },
  SeeMoreDesignation: {
    position: 'absolute',
    width: 200,
    height: 50,
    top: 55,
    left: 120,
    marginTop: -10,
  },
  SeeMoreAvailability: {
    fontSize: 16,
    alignItems: 'flex-start',
    marginBottom: 16,
    left: 10,
    color: 'green',
    top: -20,
  },

  viewButton: {
    backgroundColor: '#757575',
    borderRadius: 10,
    top: -135,
    alignItems: 'center',
    width: 78,
    height: 30,
    left: 130,
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    alignSelf: 'flex-start',
    fontSize: 18,
    top: -20,
    color: '#000000',
  },

  keyValueRow: {
    flexDirection: 'row',
    left: 110,
    top: -115,
    position: 'relative',
    marginTop: 2,
  },
  keyValueContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    width: 80,
    height: 100,
  },
  keyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  valueContainer: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  valueText: {
    fontSize: 16,
  },
});

export default SeeMore;
