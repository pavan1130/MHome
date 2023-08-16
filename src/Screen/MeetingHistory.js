import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import data from 'MHome/data2.json';
import {useNavigation} from '@react-navigation/native';

const KeyValueContainer = ({label, value}) => (
  <View style={styles.keyValueContainer}>
    <View style={styles.valueContainer}>
      <Text style={styles.valueText}>{value}</Text>
    </View>
    <Text style={styles.keyText}>{label}</Text>
  </View>
);
const UserCard = ({user}) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: user.imageUrl}} style={styles.userImage} />
      <Text style={styles.userName}>{user.name}</Text>

      <TouchableOpacity style={styles.meetingbook}>
        <Text>Book a meeting</Text>
      </TouchableOpacity>
      <View style={styles.keyValueRow}>
        <KeyValueContainer
          label="Overall Attendance"
          value={user.overAttendance}
        />
        <KeyValueContainer
          label="Average Ratings"
          value={user.averageRatings}
        />
        <KeyValueContainer
          label="Sessions Completed"
          value={user.sessionsCompleted}
        />
      </View>

      <TouchableOpacity style={[styles.message]}>
        <Image
          source={require('MHome/src/Screen/images/m.png')}
          style={[styles.messageIcon]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.meetingHistoryIcon}
        onPress={toggleDropdown}>
        <Image
          source={require('MHome/src/Screen/images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.dropdownContainer}>
          {user.meetingHistory.map((meeting, index) => (
            <View key={index} style={styles.meetingHistoryItem}>
              <Text style={styles.meetingHistoryDate}>{meeting.date}</Text>
              <Text style={styles.meetingHistoryTopic}>{meeting.topic}</Text>
              <Text style={styles.meetingHistoryTime}>{meeting.time}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const MeetingHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
        <Image
          source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
          style={styles.appLogo}
        />
      </TouchableOpacity>
      <Text style={styles.heading}> Meeting History</Text>
      {data.users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrowleft: {
    top: 60,
    marginLeft: 20,
    height: 28,
    width: 28,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 34,
    letterSpacing: 0,
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 70,
    color: 'black',
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginTop: 120,
  },
  appLogo: {
    height: 40,
    width: 40,
    top: 40,
    left: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    maxHeight: 225,
    width: 370,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 2,
    top: 70,
    marginLeft: 10,
    marginRight: 10,
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
  message: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    top: -145,
    alignItems: 'center',
    width: 35,
    height: 35,
    left: 130,
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageIcon: {
    borderRadius: 5,
    top: 2,
    alignItems: 'center',
    width: 25,
    height: 25,
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyValueRow: {
    flexDirection: 'row',
    left: 110,
    top: -125,
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
    //fontWeight: 'bold',
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
  meetingbook: {
    height: 30,
    width: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetingHistoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  meetingHistoryIcon: {
    position: 'absolute',
    top: 150,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  meetingHistoryDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  meetingHistoryTopic: {
    fontSize: 14,
  },
  meetingHistoryTime: {
    fontSize: 14,
  },
  dropdownContainer: {
    borderColor: '#ccc',
    borderTopWidth: 1,
    paddingTop: 10,
    top: -135,
  },
});

export default MeetingHistory;
