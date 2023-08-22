import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';

const botResponses = [
  {patterns: ['hello', 'hi', 'hey'], response: 'Hi there!'},
  {
    patterns: ['how are you', 'how are you doing'],
    response: "I'm doing well, thank you!",
  },
  {
    patterns: ["what's your name", 'who are you'],
    response: "I'm just a simple AI bot.",
  },
  {
    patterns: ['bye', 'goodbye', 'see you', 'see you later'],
    response: 'Goodbye!',
  },
  {
    patterns: ['how to manage my finance', 'finance help', 'help for finance'],
    response:
      'Got your query for finance. For more information, visit our finance mentor page.',
  },

  {
    patterns: ['tell me a joke', 'make me laugh'],
    response:
      "Sure, here's a joke: Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    patterns: ['whats the weather today?', 'weather forecast'],
    response:
      "I'm sorry, I'm just a text-based bot and can't provide real-time weather updates.",
  },
  {
    patterns: ['help', 'need help', 'show commands'],
    response:
      "Sure, here are some things you can ask me:\n- How are you?\n- What's your name?\n- How to manage my finance?\n- Tell me a joke\n- What's the weather today?\n- Goodbye",
  },
];

const Ai = () => {
  const [userInput, setUserInput] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handleUserInput = () => {
    const input = userInput.toLowerCase();
    let newMessages = [...messageHistory];

    for (const botResponse of botResponses) {
      for (const pattern of botResponse.patterns) {
        if (input.includes(pattern)) {
          const newBotMessage = botResponse.response;
          newMessages.push({sender: 'user', content: userInput});
          newMessages.push({sender: 'bot', content: newBotMessage});
          setMessageHistory(newMessages);
          setUserInput('');
          return;
        }
      }
    }

    const errorMessage =
      "I'm sorry, I didn't understand that. Can you please try again?";
    newMessages.push({sender: 'user', content: userInput});
    newMessages.push({sender: 'bot', content: errorMessage});
    setMessageHistory(newMessages);
    setUserInput('');
  };

  const closePopup = () => {
    setPopupVisible(false);
    setMessageHistory([]);
  };

  return (
    <View style={styles.container}>
      {isPopupVisible && (
        <View style={styles.popupContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={closePopup}>
              <Image
                source={require('./images/aibot.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>AI Bot</Text>
          </View>

          <ScrollView contentContainerStyle={styles.messageContainer}>
            <FlatList
              data={messageHistory}
              renderItem={({item}) => (
                <View
                  style={
                    item.sender === 'bot'
                      ? styles.botMessageContainer
                      : styles.userMessageContainer
                  }>
                  <Text
                    style={
                      item.sender === 'bot' ? styles.botText : styles.userText
                    }>
                    {item.content}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.messageList}
            />
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={userInput}
              onChangeText={setUserInput}
              placeholder="Type your message here..."
              placeholderTextColor="#ccc"
              autoFocus={false}
              returnKeyType="send"
              onSubmitEditing={handleUserInput}
            />
            <TouchableOpacity
              onPress={handleUserInput}
              style={styles.sendButton}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

   
  },

  closeButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },

  popupContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingBottom: 16,
    height: 700,
    width: 350,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'gray',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 60,
  },

  logo: {
    width: 68,
    height: 68,
    marginRight: 12,
    marginTop: 10,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  messageContainer: {
    flexGrow: 1,
  },
  botMessageContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  userMessageContainer: {
    backgroundColor: 'rgb(173, 216, 230)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-end',
    maxWidth: '70%',
  },
  botText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Inter-Regular',
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },

  userText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Inter-Regular',
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },
  messageList: {
    padding: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    padding: 16,
  },

  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    marginRight: 8,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },

  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
  },
});

export default Ai;
