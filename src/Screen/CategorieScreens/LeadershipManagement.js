import {React, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import data from 'MHome/data.json';
const KeyValueContainer = ({label, value}) => (
  <View style={styles.keyValueContainer}>
    <View style={styles.valueContainer}>
      <Text style={styles.valueText}>{value}</Text>
    </View>
    <Text style={styles.keyText}>{label}</Text>
  </View>
);
const UserCard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(data.Leader);
  }, []);
  const handleSave = userId => {
    // Implement your save functionality here
    // You can update the state or perform any other action when a user is saved
    console.log(`User ${userId} saved`);
  };

  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      {userData.map(Leader => (
        <View key={Leader.id} style={styles.card}>
          <Image source={{uri: Leader.imageUrl}} style={styles.userImage} />
          <Text style={styles.userName}>{Leader.name}</Text>
          <Text style={styles.userDesignation}>{Leader.designation}</Text>
          <Text style={styles.userAvailability}>
            {Leader.availability === 'Available'
              ? 'Available'
              : 'Not Available'}
          </Text>
          <Text style={styles.price}>$45/month</Text>
          <View style={styles.keyValueRow}>
            <KeyValueContainer
              label="Overall Attendance"
              value={Leader.overAttendance}
            />
            <KeyValueContainer
              label="Average Ratings"
              value={Leader.averageRatings}
            />
            <KeyValueContainer
              label="Sessions Completed"
              value={Leader.sessionsCompleted}
            />
          </View>
          <TouchableOpacity
            onPress={() => handleSave(Leader.id)}
            style={styles.saveButton}>
            <Image
              source={require('MHome/src/Screen/images/Bookmark.png')}
              style={styles.saveIcon}
            />
          </TouchableOpacity>

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
        source={require('../images/b.jpg')}
        style={styles.footerBackground}
      />
      <Image source={require('../images/n.png')} style={styles.footerImage2} />
      <Image source={require('../images/c.png')} style={styles.footerImage3} />
      <Image source={require('../images/h.png')} style={styles.footerImage4} />
      <Image source={require('../images/m.png')} style={styles.footerImage5} />
    </View>
  );
};
const LeadershipManagement = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.appNameContainer}>
          <Image
            source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
            style={styles.appLogo}
          />
          <View style={styles.appNameTextContainer}>
            <Text style={styles.appNameText}>Leadership & Management</Text>
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
      <View style={styles.emptyspace}></View>
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
    width: 270,
    height: 44,
    left: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 290,
    top: -41,
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
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    height: 220,
    width: 370,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 3,
    left: 20,
    marginBottom: 20,
  },
  userImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginBottom: 12,
    top: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    top: -105,
    left: 100,
  },
  userDesignation: {
    position: 'absolute',
    width: 200,
    height: 50,
    top: 55,
    left: 120,
    marginTop: -10,
  },
  userAvailability: {
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

  emptyspace: {
    marginTop: 80,
  },
  saveButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 8,
    borderRadius: 20,
  },
  saveIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default LeadershipManagement;
