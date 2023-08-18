import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';

const Message = ({item}) => {
  return (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessage : styles.receiverMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );
};
const PinnedContent = () => {
  return (
    <View style={styles.pinnedContentContainer}>
      <Image
        source={require('MHome/src/Screen/images/icons8-pin-50.png')}
        style={styles.pinnedIcon}
      />
      <Text style={styles.pinnedText}>Pinned Content</Text>
    </View>
  );
};
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0); // New state for message count
  const [buyPopupVisible, setBuyPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('MHome/src/Screen/images/BackButton.png')}
            style={styles.appLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            source={require('MHome/src/Screen/images/2.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.name}>John</Text>
        <View></View>
      </View>
    );
  };
  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      setErrorMessage('Message cannot be empty.');
      return;
    }

    if (messageCount >= 5) {
      setErrorMessage('You have reached the message limit.');
      setBuyPopupVisible(true); // Show the popup
      return;
    }

    const newMessageObject = {
      text: newMessage,
      id: String(messages.length),
      user: true,
      timestamp: new Date(),
      doubleTick: false,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage('');
    setMessageCount(messageCount + 1);
    setErrorMessage(''); // Clear the error message
  };

  const BuyMessagePopup = ({onClose}) => {
    return (
      <Modal visible={buyPopupVisible} transparent={true} animationType="slide">
        <View style={styles.buyPopupContainer}>
          <View style={styles.buyPopupContent}>
            <Image
              source={require('MHome/src/Screen/images/send.png')}
              style={styles.popupImage}
            />
            <Text style={styles.buyPopupText}>Add Messages</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => {
                // Handle buying message content
                onClose(); // Close the popup
              }}>
              <Text style={styles.buyButtonText}>Buy Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                onClose(); // Close the popup
              }}>
              <Image
                source={require('MHome/src/Screen/images/close.png')}
                style={[styles.closeicon]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor1}>
        <Header />
        <PinnedContent />
        <BuyMessagePopup onClose={() => setBuyPopupVisible(false)} />
      </View>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Message item={item} />
            <View style={styles.messageInfoContainer}>
              <Text style={styles.messageTime}>
                {item.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <Text style={styles.messageDate}>
                {item.timestamp.toLocaleDateString([], {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
              <TouchableOpacity
                onPress={() => handleDoubleTickToggle(item.id)}
                style={styles.doubleTickContainer}>
                <Text style={styles.doubleTick}>
                  {item.doubleTick ? '✔' : '✔✔'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <View style={styles.backgroundColor}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={text => setNewMessage(text)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.messageCountBox}>
          <Text style={styles.messageCountText}>
            Messages Sent: {messageCount}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor1: {
    backgroundColor: '#EAEAEA',
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
  },
  appLogo: {
    width: 34,
    height: 34,
  },
  profileContainer: {
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    left: 30,
    top: -5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    marginRight: 120,
  },
  pinnedContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'grey',
    borderRadius: 8,
    marginBottom: 1,
    marginTop: 10,
  },
  pinnedIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  pinnedText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%',
    marginTop: 10,
    marginRight: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D9D9D9',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',
  },
  messageText: {
    fontSize: 16,
    color: 'grey',
  },
  messageInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: -10,
    marginRight: 10,
  },
  messageTime: {
    fontSize: 12,
    color: 'grey',
    marginRight: 4,
  },
  messageDate: {
    fontSize: 12,
    color: 'grey',
    marginRight: 4,
  },
  doubleTickContainer: {
    padding: 2,
  },
  doubleTick: {
    fontSize: 12,
    color: 'grey',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    width: '95%',
    left: 10,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 2,
    borderColor: '#585858',
    padding: 8,
    borderRadius: 8,
  },
  sendButton: {
    padding: 8,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  sendButtonText: {
    color: 'white',
  },
  backgroundColor: {
    backgroundColor: '#D9D9D9',
  },
  messageCountBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#585858',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  messageCountText: {
    color: 'white',
  },
  buyPopupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buyPopupContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 18,
    borderColor: 'black',
    alignItems: 'center',
    width: 320,
    height: 340,
  },
  buyPopupText: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  buyButton: {
    width: 197,
    height: 51,
    marginTop: 16,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 19,
  },
  buyButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  closeicon: {
    height: 30,
    width: 30,
    left: 145,
    top: -290,
  },
  errorMessage: {
    color: 'red',
    marginTop: 8,
  },
});

export default ChatScreen;
