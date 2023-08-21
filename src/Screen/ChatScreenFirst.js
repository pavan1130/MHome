import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const messages = [
  {
    id: 1,
    profileURL:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Mentor AB',
    lastMessage: 'Lorem ipsum dolor sit amet, co....',
    timeAgo: 5,
  },
  // Add more messages here
];
const messages1 = [
  {
    id: 1,
    profileURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1b6b8-SGhdk0tifwTFwdLdgYe4yGLZJKrooKbsYWO2YPygcFLnU5lrcWhECp4Sau9wg&usqp=CAU',
    name: 'Mentor AB',
    lastMessage: 'Lorem ipsum dolor sit amet, co....',
    timeAgo: 5,
  },
];
const messages2 = [
  {
    id: 1,
    profileURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQBQuIz76W8hvZt8qxOvgCCt0mzKMd0wdzp8w9Jpr0wi1Yx3tbbj49uajKcoGZlfsrgc&usqp=CAU',
    name: 'Mentor AB',
    lastMessage: 'Lorem ipsum dolor sit amet, co....',
    timeAgo: 5,
  },
];

const ChatScreenFirst = ({}) => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const handleSearchChange = text => {
    setSearchText(text);
  };
  const handleFilterChange = filter => {
    setSelectedFilter(filter);
  };

  const filteredMessages = messages.filter(message => {
    if (selectedFilter === 'myMentors') {
      // Implement your filter logic for 'My Mentors'
      return message.name === 'Mentor AB'; // Example filter logic
    } else if (selectedFilter === 'unread') {
      // Implement your filter logic for 'Unread'
      return message.unread; // Example filter logic
    }
    // Filter logic for 'All'
    return true;
  });
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
          <Text style={styles.appNameText}>Chat</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearchChange}
        />
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleFilterChange('myMentors')}>
        <Text style={styles.mymentor}>My Mentors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button1}
        onPress={() => handleFilterChange('unread')}>
        <Text style={styles.unread}>Unread</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button2}
        onPress={() => handleFilterChange('all')}>
        <Text style={styles.all}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.messageContainer}>
              <View style={styles.profileContainer}>
                <Image
                  source={{uri: item.profileURL}}
                  style={styles.profileURL}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.lastMessage}</Text>
              <Text style={styles.timeAgo}>{item.timeAgo} mins ago</Text>
            </View>
          )}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
        <FlatList
          data={messages1}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.messageContainer}>
              <View style={styles.profileContainer}>
                <Image
                  source={{uri: item.profileURL}}
                  style={styles.profileURL}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.lastMessage}</Text>
              <Text style={styles.timeAgo}>{item.timeAgo} mins ago</Text>
            </View>
          )}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
        <FlatList
          data={messages2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.messageContainer}>
              <View style={styles.profileContainer}>
                <Image
                  source={{uri: item.profileURL}}
                  style={styles.profileURL}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.lastMessage}</Text>
              <Text style={styles.timeAgo}>{item.timeAgo} mins ago</Text>
            </View>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 38,
    justifyContent: 'center',
  },
  appNameText: {
    //  color: '#7B7A7C',
    fontFamily: 'Inter',
    fontSize: 24,
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
    borderColor: '#585858',
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
  Button: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 0,
    // paddingVertical: 5,
    borderRadius: 14,
    marginTop: 10,
    width: 100,
    height: 30,
    marginLeft: 20,
  },
  mymentor: {
    color: 'black',
    fontSize: 18,
    left: 8,
    fontWeight: 'bold',
    top: 3,
  },
  Button1: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 0,
    // paddingVertical: 5,
    borderRadius: 14,
    marginTop: -30,
    width: 80,
    height: 30,
    marginLeft: 130,
  },
  unread: {
    color: 'black',
    fontSize: 18,
    left: 13,
    fontWeight: 'bold',
    top: 3,
  },
  Button2: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 0,
    // paddingVertical: 5,
    borderRadius: 14,
    marginTop: -30,
    width: 40,
    height: 30,
    marginLeft: 220,
  },
  all: {
    color: 'black',
    fontSize: 18,
    left: 8,
    fontWeight: 'bold',
    top: 3,
  },
  profileURL: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 120,
    height: 40,
    width: 40,
    backgroundColor: '#D9D9D9',
    top: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 0,
    borderBottomColor: '#ccc',
    marginBottom: 5,
    top: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    left: 20,
    color: '#7B7A7C',
  },
  message: {
    color: '#666',
    left: -48,
    top: 15,
  },
  timeAgo: {
    color: '#999',
    left: 0,
    //top:-30
  },
});

export default ChatScreenFirst;
