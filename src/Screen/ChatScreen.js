// npm install @react-native-community/checkbox ----[for Checkbox ]
//npm install react-native-document-picker   -----[document-picker file attecment]

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
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

const Header = ({
  handleMoreVertClick,
  handleBlockClick,
  handleMeetRequestClick,
  handleProfileClick,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('FirstChatScreen')}>
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
      <TouchableOpacity
        style={styles.moreVertContainer}
        onPress={handleMoreVertClick}>
        <Image
          source={require('MHome/src/Screen/images/more_vert_FILL0_wght400_GRAD0_opsz48.png')}
          style={styles.viewmore}
        />
      </TouchableOpacity>
    </View>
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0); // Initialize message count
  const [buyPopupVisible, setBuyPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [pinnedMessages, setPinnedMessages] = useState([]);
  const [pinnedMessageCount, setPinnedMessageCount] = useState(0); // Initialize pinned message count
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [showReportPopup, setShowReportPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleAttachmentPick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf], // this will only allow PDFs. For all files use .allFiles
      });

      setSelectedFile({
        uri: result.uri,
        type: result.type,
        name: result.name,
        size: result.size,
      });
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User canceled the picker
      } else {
        console.error('Error picking document:', error);
      }
    }
  };

  const handlePinMessage = message => {
    setPinnedMessages([...pinnedMessages, message]);
    setPinnedMessageCount(prevCount => prevCount + 1); // Increment pinned message count
  };
  const ReportPopup = ({onClose}) => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxToggle = () => {
      setIsCheckboxChecked(!isCheckboxChecked);
    };

    return (
      <Modal transparent animationType="slide">
        <View style={styles.popupBackground}>
          <View style={styles.popupContainer}>
            <Text style={styles.reportText}>Report</Text>
            <Text style={styles.reportExplanation}>
              Your report will be reviewed by our team. If content is
              inappropriate, appropriate action will be taken against the user.
              Thank you for your assistance in maintaining a safe community.
            </Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isCheckboxChecked}
                onValueChange={handleCheckboxToggle}
              />
              <Text style={styles.checkboxLabel}>Block</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reportButton}>
                <Text style={styles.buttonText}>Report</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      setErrorMessage('Message cannot be empty.');
      return;
    }

    if (messageCount >= 5) {
      setErrorMessage('You have reached the message limit.');
      setBuyPopupVisible(true);
      return;
    }

    const newMessageObject = {
      text: newMessage,
      id: String(messages.length),
      user: true,
      timestamp: new Date(),
      doubleTick: false,
      file: selectedFile,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage('');
    setMessageCount(prevCount => prevCount + 1); // Increment message count
    setErrorMessage('');
    setSelectedFile(null);
  };

  const handleDoubleTickToggle = itemId => {
    const updatedMessages = messages.map(message =>
      message.id === itemId
        ? {...message, doubleTick: !message.doubleTick}
        : message,
    );
    setMessages(updatedMessages);
  };

  const handleAttachmentClick = async () => {
    // ... (handle attachment logic)
  };
  const handleMoreVertClick = () => {
    setOptionsVisible(!optionsVisible); // Toggle visibility
  };

  const handleCloseReportPopup = () => {
    setShowReportPopup(false);
  };

  const handleBlockClick = () => {
    // Handle block logic
  };

  const handleMeetRequestClick = () => {
    // Handle meet request logic
  };
  const handleProfileClick = () => {
    // Handle profile logic
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
  const Message = ({item}) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.user ? styles.userMessage : styles.receiverMessage,
        ]}>
        <Text style={styles.messageText}>{item.text}</Text>
        {item.file && (
          <TouchableOpacity onPress={() => Linking.openURL(item.file.uri)}>
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
              {item.file.name}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const PinnedContent = ({pinnedMessages}) => {
    const pinnedMessageCount = pinnedMessages.length;

    return (
      <View style={styles.pinnedContentContainer}>
        <Image
          source={require('MHome/src/Screen/images/pin.png')}
          style={styles.pinnedIcon}
        />
        <Text style={styles.pinnedText}>Pinned Content</Text>
        <Text style={styles.pinnedCountText}>{pinnedMessageCount} Pinned</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor1}>
        <Header
          handleMoreVertClick={handleMoreVertClick}
          handleBlockClick={handleBlockClick}
          handleMeetRequestClick={handleMeetRequestClick}
          handleProfileClick={handleProfileClick}
        />
        <PinnedContent pinnedMessages={pinnedMessages} />
        <BuyMessagePopup onClose={() => setBuyPopupVisible(false)} />
      </View>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Message item={item} />

            <TouchableOpacity
              onPress={() => handlePinMessage(item)}
              style={styles.pinButton}>
              <Image
                source={require('MHome/src/Screen/images/pin.png')}
                style={styles.pinnedIcon1}
              />
            </TouchableOpacity>
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
            onSubmitEditing={handleSendMessage}
          />

          <TouchableOpacity
            style={styles.attachmentButton}
            // onPress={handleSendMessage}
            onPress={handleAttachmentPick}>
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
      {optionsVisible && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => setShowReportPopup(true)}>
            <Text style={styles.optionText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBlockClick}>
            <Text style={styles.optionText}>Block</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMeetRequestClick}>
            <Text style={styles.optionText}>Meet Request</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfileClick}>
            <Text style={styles.optionText}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}
      {showReportPopup && <ReportPopup onClose={handleCloseReportPopup} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#EAEAEA',
    paddingVertical: 10,
  },

  appLogo: {
    width: 34,
    height: 34,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    left: 30,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    right: 170,
  },
  viewmore: {
    height: 30,
    width: 30,
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
    width: '93%',
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
  attachmentButton: {
    padding: 8,
    position: 'absolute',
    right: 50,
    bottom: -5,
  },
  attachement: {
    width: 38,
    height: 38,
  },
  sendButton: {
    backgroundColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    left: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
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
  pinnedContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#CECECE',
    borderRadius: 8,
    marginBottom: 1,
  },
  pinnedIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  pinnedText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'flex-end',
  },
  pinnedCountText: {
    fontSize: 14,
    color: 'black',
  },
  pinnedIcon1: {
    width: 15,
    height: 15,
    position: 'relative',
    left: 210,
    top: 10,
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: '#EDEDED',
    padding: 20,
    borderTopWidth: 1,
    width: 150,
    borderTopColor: 'lightgrey',
    top: 51,
    left: 210,
  },
  optionText: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#7B7A7C',
  },
  // Report Popup Styles
  popupBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    width: 333,
    height: 396,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#000000', // Border color
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  reportText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  reportExplanation: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 1.265,
    textAlign: 'justify',
    marginBottom: 20,
    width: 260,
    left: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    borderRadius: 40,
    paddingVertical: 10,
    marginRight: 10,
  },
  reportButton: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    paddingVertical: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
  },
});

export default ChatScreen;
