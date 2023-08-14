import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import data1 from 'MHome/data1.json';
import {useNavigation} from '@react-navigation/native';
import Categories from './Categories';
import Ai from './Ai';
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
    setuserData(data1.mentor);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      {userData.map(mentor => (
        <View key={mentor.id} style={styles.card}>
          <Image
            source={{uri: mentor.imageUrl}}
            style={styles.RecommendedImage}
          />
          <Text style={styles.RecommendedName}>{mentor.name}</Text>
          <Text style={styles.RecommendedDesignation}>
            {mentor.designation}
          </Text>
          <Text style={styles.RecommendedAvailability}>
            {mentor.availability === 'Available'
              ? 'Available'
              : 'Not Available'}
          </Text>
          <Text style={styles.price}>$45/month</Text>
          <View style={styles.keyValueRow}>
            <KeyValueContainer
              label="Overall Attendance"
              value={mentor.overAttendance}
            />
            <KeyValueContainer
              label="Average Ratings"
              value={mentor.averageRatings}
            />
            <KeyValueContainer
              label="Sessions Completed"
              value={mentor.sessionsCompleted}
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

const UserCard1 = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    setuserData(data1.Recommended);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.cardContainer1}>
      {userData.map(Recommended => (
        <View key={Recommended.id} style={styles.card1}>
          <Image
            source={{uri: Recommended.imageUrl}}
            style={styles.RecommendedImage}
          />
          <Text style={styles.RecommendedName}>{Recommended.name}</Text>
          <Text style={styles.RecommendedDesignation}>
            {Recommended.designation}
          </Text>
          <Text style={styles.RecommendedAvailability}>
            {Recommended.availability === 'Available'
              ? 'Available'
              : 'Not Available'}
          </Text>
          <Text style={styles.price}>$45/month</Text>
          <View style={styles.keyValueRow}>
            <KeyValueContainer
              label="Overall Attendance"
              value={Recommended.overAttendance}
            />
            <KeyValueContainer
              label="Average Ratings"
              value={Recommended.averageRatings}
            />
            <KeyValueContainer
              label="Sessions Completed"
              value={Recommended.sessionsCompleted}
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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSearchChange = text => {
    setSearchText(text);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToGroup = () => {
    console.log('Navigating to Group screen');
    toggleMenu();
  };

  const navigateToEventList = () => {
    console.log('Navigating to Event List screen');
    toggleMenu();
  };

  const navigateToTransactions = () => {
    console.log('Navigating to Transactions screen');
    toggleMenu();
  };

  const navigateToSettings = () => {
    console.log('Navigating to Settings screen');
    toggleMenu();
  };
  const shareApp = () => {
    console.log('Sharing the app');
    toggleMenu();
  };

  const navigateToHelp = () => {
    console.log('Navigating to Help & FAQs screen');
    toggleMenu();
  };

  const navigateToAbout = () => {
    console.log('Navigating to About Us screen');
    toggleMenu();
  };
  const navigateToBeAMentor = () => {
    console.log('Navigating to Be a Mentor screen');
    toggleMenu();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.appNameContainer}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image
              source={require('./images/app.jpg')}
              style={styles.appLogo}
            />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={menuVisible}
            onRequestClose={toggleMenu}>
            <View style={styles.menuModal}>
              <View style={styles.accountDetails}>
                <Image
                  source={require('MHome/src/Screen/images/user.png')}
                  style={[styles.usericon]}
                />
                <View>
                  <Text style={[styles.accountName, {color: 'grey'}]}>
                    arun das
                  </Text>
                  <Text style={[styles.accountEmail, {color: 'grey'}]}>
                    arun.doe@example.com
                  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                <Image
                  source={require('MHome/src/Screen/images/close.png')}
                  style={[styles.closeicon]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={navigateToGroup}
                style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/breastfeeding.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  Be a mentor
                </Text>
              </TouchableOpacity>
              <View style={styles.menuline} />
              <TouchableOpacity
                onPress={navigateToEventList}
                style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/event_list.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  My mentors
                </Text>
              </TouchableOpacity>
              <View style={styles.menuline} />
              <TouchableOpacity
                onPress={navigateToTransactions}
                style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/receipt_long.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  Transactions
                </Text>
              </TouchableOpacity>
              <View style={styles.menuline} />
              <TouchableOpacity
                onPress={navigateToSettings}
                style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/settings.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  App Settings
                </Text>
              </TouchableOpacity>
              <View style={styles.menuline} />
              <TouchableOpacity onPress={shareApp} style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/share.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  Share App
                </Text>
              </TouchableOpacity>
              <View style={styles.menuline} />

              <TouchableOpacity
                onPress={navigateToHelp}
                style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/quiz.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  Help & FAQs
                </Text>
              </TouchableOpacity>
              <View style={styles.menuline} />
              <TouchableOpacity
                onPress={navigateToAbout}
                style={styles.menuItem}>
                <Image
                  source={require('MHome/src/Screen/images/event_list.png')}
                  style={[styles.menuicon]}
                />
                <Text style={[styles.menuItemText, {color: 'grey'}]}>
                  About Us
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <View style={styles.appNameTextContainer}>
            <Text style={styles.appNameText}>Mentor App</Text>
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
        <Categories />
        <View style={styles.horizontalLine} />

        <Text style={styles.topMentorText}>Top Mentor</Text>

        <Text
          style={styles.seeMoreButtonText}
          onPress={() => navigation.navigate('Seemore')}>
          See More
        </Text>
        <View></View>
        <View style={styles.container}>
          {/* Button to toggle the popup */}
          <TouchableOpacity onPress={togglePopup}>
            <Image source={require('./images/aibot.png')} style={styles.logo} />
          </TouchableOpacity>

          {/* Popup */}
          <Modal
            animationType="flip"
            visible={isPopupVisible}
            onRequestClose={() => setIsPopupVisible(false)}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>
                <Ai />
              </Text>
            </View>
          </Modal>
          <View />
        </View>
        <UserCard />
        <View style={styles.horizontalLine2} />
        <Text style={styles.RecommendedText}>Recommended</Text>
        <Text
          style={styles.FilterButtonText}
          onPress={() => navigation.navigate('FilterScreen')}>
          Filter{' '}
        </Text>
        <UserCard1 />
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 61,
    height: 61,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    width: 28,
    height: 28,
    marginRight: 30,
  },
  appNameTextContainer: {
    width: 166,
    height: 28,
    justifyContent: 'center',
  },
  appNameText: {
    color: '#7B7A7C',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 18,
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
    width: 358,
    height: 44,
    left: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesText: {
    fontFamily: 'Inter',
    lineHeight: 18,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
    color: '#7B7A7C',
  },
  categoriesContainer: {
    paddingVertical: 10,
    marginTop: 5,
  },
  categoryCard: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImageContainer: {
    flex: 1,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryNameText: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    color: 'white',
    fontSize: 9,
    fontWeight: '500',
    paddingVertical: 2,
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#D9D9D9',
    marginVertical: 20,
    borderRadius: 1,
    width: '95%',
    left: 10,
  },
  topMentorText: {
    fontFamily: 'Inter',
    fontSize: 16,
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
    marginTop: 20,
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
  cardContainer1: {
    paddingHorizontal: 20,
    marginBottom: 90,
  },
  card1: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    height: 220,
    width: 370,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  RecommendedImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    top: 10,
  },
  RecommendedName: {
    fontSize: 20,
    fontWeight: 'bold',
    top: -105,
    left: 100,
  },
  RecommendedDesignation: {
    position: 'absolute',
    width: 200,
    height: 50,
    top: 55,
    left: 120,
    marginTop: -10,
  },
  RecommendedAvailability: {
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
  horizontalLine2: {
    height: 1.5,
    backgroundColor: '#D9D9D9',
    marginVertical: 20,
    borderRadius: 1,
    width: '90%',
    left: 20,
    top: -5,
  },
  RecommendedText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: '#7B7A7C',
    left: 30,
    top: -5,
  },
  FilterButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-end',
    left: -30,
    top: -30,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 26,
    backgroundColor: '#D9D9D9',
    width: 76,
    height: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  },
  darkBackground: {
    backgroundColor: '#1E1E1E',
  },
  switchContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 50,
    marginLeft: 20,
    marginTop: 40,
  },
  accountName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'black',
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
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'flex-start',
    backgroundColor: '#F4F4F4',
  },
  closeButton: {
    alignSelf: 'flex-end',
    margin: 20,
    marginTop: -70,
  },
  closeicon: {
    height: 25,
    width: 25,
    left: 15,
    top: -50,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    left: 12,
  },
  menuItemText: {
    fontSize: 20,
    marginLeft: 10,
  },
  menuicon: {
    width: 20,
    height: 20,
  },
  menuicon: {
    width: 30,
    height: 30,
  },
  menuline: {
    height: 1,
    backgroundColor: '#867676',
    borderRadius: 1,
    width: '80%',
    left: 20,
  },
});

export default HomeScreen;
