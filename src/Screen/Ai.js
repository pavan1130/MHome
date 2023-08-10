import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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
    patterns: ['how to manage my finance', 'finance help', 'help for finanace'],
    response: 'got your query for your referance visit our mentor Finance page',
  },
];

const Ai = () => {
  const [userInput, setUserInput] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

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
          console.log(newMessages);
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
    console.log(newMessages);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('OtherPage')}>
        <View style={styles.header}>
          <Image
            source={require('MHome/src/Screen/images/aibot.png')}
            style={styles.logo}
          />
          <Text style={styles.heading}>AI Bot</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.chat}>
        <FlatList
          data={messageHistory}
          renderItem={({item}) => (
            <Text
              style={item.sender === 'bot' ? styles.botText : styles.userText}>
              {item.content}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.userInput}>
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
        <Button style={styles.button} title="Send" onPress={handleUserInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: 'white',
  },

  logo: {
    width: 61,
    height: 61,
    top: 166,
    left: 42,
    color: '#000000',
  },

  heading: {
    fontFamily: 'Inter',
    fontSize: 20,

    lineHeight: 18,
    letterSpacing: -0.16500000655651093,
    textAlign: 'left',
    color: '#7B7A7C',
    width: 166,
    height: 28,
    top: 183,
    left: 127,
  },
  chat: {
    flex: 1,
    padding: 16,
  },
  botText: {
    fontSize: 18,
    color: ' #7B7A7C',
    fontFamily: 'Inter',

    lineHeight: 18,
    letterSpacing: -0.16500000655651093,
    textAlign: 'justified',
    backgroundColor: ' #D9D9D9',
    width: 217,
    height: 19,
    top: 271,
    left: 40,
  },
  userText: {
    fontSize: 18,
    fontFamily: 'Inter',

    lineHeight: 18,
    letterSpacing: -0.16500000655651093,
    textAlign: 'justified',
    backgroundColor: ' #D9D9D9',
    width: 217,
    height: 24,
    top: 406,
    left: 173,
    color: 'blue',
    alignSelf: 'flex-end',
  },
  userInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    marginRight: 8,
  },
});

export default Ai;
