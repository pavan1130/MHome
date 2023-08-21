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
import DocumentPicker from 'react-native-document-picker';

const Message = ({item}) => {
  return (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessage : styles.receiverMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      {item.file && (
        <View>
          <Text style={styles.messageText}>{item.file.name}</Text>
          <TouchableOpacity
            onPress={() => {
              // Handle opening the file
              // For example, you can use Linking from 'react-native'
              Linking.openURL(item.file.uri);
            }}>
            <Text style={styles.fileLink}>Open File</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const PinnedContent = () => {
  return (
    <View style={styles.pinnedContentContainer}>
      <Image
        source={require('MHome/src/Screen/images/BackButton.png')}
        style={styles.pinnedIcon}
      />
      <Text style={styles.pinnedText}>Pinned Content</Text>
    </View>
  );
};
const Demo = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0); // New state for message count
  const [buyPopupVisible, setBuyPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAttachment = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });
      console.log('Attachment result:', result);
      if (result.type === 'success') {
        setSelectedFile(result); // Store the selected file
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User canceled the picker
      } else {
        console.error('Error picking file:', error);
      }
    }
  };

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
            source={require('MHome/src/Screen/images/7.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.name}>John</Text>
        <View></View>
      </View>
    );
  };
  const handleSendMessage = () => {
    if (newMessage.trim() === '' && !selectedFile) {
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
      file: selectedFile,
      id: String(messages.length),
      user: true,
      timestamp: new Date(),
      doubleTick: false,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage('');
    setMessageCount(messageCount + 1);
    setSelectedFile(null);
    setErrorMessage(''); // Clear the error message
  };

  const BuyMessagePopup = ({onClose}) => {
    return (
      <Modal visible={buyPopupVisible} transparent={true} animationType="slide">
        <View style={styles.buyPopupContainer}>
          <View style={styles.buyPopupContent}>
            <Text style={styles.buyPopupText}>Buy this message content?</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => {
                // Handle buying message content
                onClose(); // Close the popup
              }}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                onClose(); // Close the popup
              }}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
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
            style={styles.attachmentButton}
            onPress={handleAttachment}>
            <Image
              source={require('MHome/src/Screen/images/attachment_FILL0_wght400_GRAD0_opsz48.png')}
              style={styles.attachement}
            />
          </TouchableOpacity>
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
    borderRadius: 8,
    alignItems: 'center',
  },
  buyPopupText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buyButtonText: {
    color: 'white',
  },
  cancelButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
  },
  errorMessage: {
    color: 'red',
    marginTop: 8,
  },
  sendMessageButton: {
    backgroundColor: 'blue', // Change this to your desired button style
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fileLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default Demo;
